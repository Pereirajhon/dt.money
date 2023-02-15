import { ContainerSearch} from './style';
import {MagnifyingGlass} from 'phosphor-react';
import {useForm} from 'react-hook-form'
import { useContext } from 'react';
import { transactionsContext } from '../../Context/TransactionsContext';

type SearchInputs = {
    query : string,
}

export const Search = () => {

    const {fetchTransactions} = useContext(transactionsContext)

    const {
        register, 
        handleSubmit, 
        formState:{isSubmitting}
    } = useForm<SearchInputs>()

    const handleSearch = async(data: SearchInputs ) => {
        console.log(data.query)
        await fetchTransactions(data.query)
    }

    return (
        <ContainerSearch onSubmit={handleSubmit(handleSearch)} >         
            <input
             type='text'
             placeholder='Busque uma transação'
             {...register('query')}
            />

            <button type='submit' disabled={isSubmitting}>
                <MagnifyingGlass size={24}/>
                <strong>
                    Buscar 
                </strong>
            </button>
        </ContainerSearch>
    )
}