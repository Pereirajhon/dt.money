import Modal from 'react-modal';
import {useForm, SubmitHandler} from 'react-hook-form'
import React, {useState, useContext} from 'react' ;
import { ContainerModal, BtnsContainer, RadioBox } from './styles';
import {ArrowCircleUp, ArrowCircleDown} from 'phosphor-react'
import {transactionsContext} from '../../Context/TransactionsContext'

type PropsModal = {
    isOpen: boolean,
    onRequestClose: () => void,
} 

type NewTransactionInputs = {
    title: string,
    price: number,
    category: string,
}

export const NewTransactionModal = ({isOpen, onRequestClose}:PropsModal) => {

    const [typeValue, setTypeValue] = useState('withDown' || 'deposit')

    const {createTransaction}= useContext(transactionsContext)

    const {handleSubmit, register, formState:{isSubmitting}, reset} = useForm<NewTransactionInputs>()

    const handleNewTransaction: SubmitHandler<NewTransactionInputs> = async(data) => {

        const {category, title, price} = data

        await createTransaction({
            category,
            title,
            type: typeValue === 'withDown' ? {withDown: price} : {deposit: price},
            price,
        })

        onRequestClose()
        reset()
    }

    return(
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
            <ContainerModal
             onSubmit={handleSubmit(handleNewTransaction)} 
             >
                <h2>Nova transação</h2>

                <input
                 type='text' 
                 placeholder='Descrição' 
                 {...register('title',{required: true})}
                 name='title'
                 />

                <input
                 type="text" 
                 placeholder='Preço' 
                 {...register('price',{required: true, valueAsNumber: true})}
                 name= 'price'
                />

                <input
                 type='text' 
                 placeholder='Categoria' 
                 {...register('category',{required: true})}    
                 name= 'category'       
                />

                <BtnsContainer>  
                    <RadioBox     
                        type='button'
                        onClick= {() => setTypeValue('withDown')}
                        isActive={typeValue === 'withDown'}         
                        className={typeValue === 'withDown' ? 'withDown' : ''}     
                    >  
                        <ArrowCircleUp size={30} color={typeValue==='withDown'? '#ffffff': '#00B37E'} />
                        Entrada
                    </RadioBox> 

                    <RadioBox 
                     type='button'
                     onClick={() => setTypeValue('deposit') }        
                     isActive={typeValue === 'deposit'}            
                     className= {typeValue === 'deposit' ? 'deposit' : ''}
                    >
                        <ArrowCircleDown size={30} 
                        color={typeValue==='deposit' ?'#ffffff': '#f65a68'}  />
                        Saída
                    </RadioBox>    
                </BtnsContainer>  

                <button type='submit' disabled={isSubmitting}> Cadastrar</button>
            </ContainerModal>
        </Modal>
    )
}