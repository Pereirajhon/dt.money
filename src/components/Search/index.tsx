import { ContainerSearch} from './style';
import iconeSearch from '../../assets/search.png';
import { Colors } from '../../Styles/colors';
import {useForm} from 'react-hook-form'
import { useContext } from 'react';
import { CreateTransactions } from '../../Context/TransactionsContext';
import { SubmitHandler } from 'react-hook-form';
import {ITransaction} from '../../Context/TransactionsContext'

type SearchInputs = {
    query : string,
}

export const Search = () => {

    const {fetchTransactions} = useContext(CreateTransactions)

    const {
        register, 
        handleSubmit, 
        formState:{isSubmitting}
    } = useForm<SearchInputs>()

    const handleSearch = async(data: SearchInputs ) => {
        console.log(data.query)
         const res = await fetchTransactions(data.query)
    }

    return (
            <ContainerSearch onSubmit={handleSubmit(handleSearch)} >
                
            <input
             type='text'
             placeholder='Busque uma transação'
             {...register('query')}
              />

            <button type='submit' >
                 <img src={iconeSearch} alt='icone de busca'/>
                 <strong>
                    Buscar 
                </strong>
            </button>
        </ContainerSearch>
    )
}