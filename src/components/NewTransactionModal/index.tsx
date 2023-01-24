import Modal from 'react-modal';
import {useForm} from 'react-hook-form'
import React, {useState, useContext, useRef} from 'react' ;
import { ContainerModal, BtnsContainer, RadioBox } from './styles';
import arrowDown from '../../assets/arrow-circle-down-regular.png'
import arrowUp from '../../assets/arrow-circle-up-regular.png'
import {CreateTransactions} from '../../Context/TransactionsContext'
import { ITransactionInput, ITransaction} from '../../Context/TransactionsContext';

type PropsModal = {
    isOpen: boolean,
    onRequestClose: () => void,
} 


export const NewTransactionModal = ({isOpen, onRequestClose}:PropsModal) => {
    const [typ, setTyp] = useState('')

    const {onSubmitData, transactions}= useContext(CreateTransactions)

    const {handleSubmit, register,formState: {isSubmitting}, reset}: any = useForm<ITransactionInput>()

    const handleNewTransaction = async(data: ITransactionInput) => {

        const {category, title, price, type} = data

        if(typ === 'positive' ){
            type.withDown = price
        }else if(typ === 'negative'){
            type.deposit = price
        }

        await onSubmitData({
            category,
            title,
            type,
            price,
        })

        onRequestClose()
        reset()
    }

    //console.log(title)

    return(
        <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
            <ContainerModal onSubmit={handleSubmit(handleNewTransaction)} >
                <h2>Nova transação</h2>

                <input
                 type='text' 
                 placeholder='Descrição' 
                 name='title'
                 {... register('title')}
                 
                 />

                <input
                 type="text" 
                 placeholder='Preço' 
                 name='price'
                 {...register('price', {valueAsNumber: true})}
                 
                />

                <input
                 type='text' 
                 placeholder='Categoria'
                 name = 'category' 
                 {...register('category')}           
                />

                <BtnsContainer    
                    >  
                    <RadioBox      
                        type='button'
                        name= 'withDown'  
                        onClick={() => setTyp('positive') }        
                        isActive={typ === 'positive'}            
                        className= {typ === 'positive' ? 'withDown' : ''}
                       // value= {'withDown' === type ? type : ''}   
                        {...register('type.withDown')}               
                    >
                        <img src={arrowDown} alt='icone entrada' />
                        Entrada
                    </RadioBox> 

                    <RadioBox
                        type='button'
                        name ='deposit'
                        onClick= {() => setTyp('negative')}
                        isActive={typ === 'negative'}         
                        className={typ === 'negative' ? 'deposit' : ''}
                        {...register('type.deposit')}
                    >
                        <img src={arrowUp} alt='icone saída' />
                        Saída
                    </RadioBox>    
                </BtnsContainer>  
 
                <button type='submit' disabled={isSubmitting}> Cadastrar</button>
            </ContainerModal>
        </Modal>
    )
}