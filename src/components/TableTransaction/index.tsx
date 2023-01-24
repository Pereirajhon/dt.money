import {useState, useEffect} from 'react';
import {ContainerTable} from './styles' ;
import {useContext} from 'react';
import {CreateTransactions} from '../../Context/TransactionsContext'
import { currencyFormatter, dateFormatter } from '../../utils/formatter';

export const TableTransaction = () => {
    
    const {transactions} = useContext(CreateTransactions)

    return (
        <ContainerTable>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categorias</th>
                        <th>Data</th> 
                    </tr>                             
                </thead>
                <tbody>                   
                     
                     { transactions &&
                        transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className= 'positive' >
                                    {currencyFormatter.format(transaction.price) }
                                </td>
                                <td>{transaction.category}</td>
                                <td>{ dateFormatter.format(new Date(transaction.createdAt)) }</td>
                            </tr> 
                        ))
                    }                    
                    
                </tbody>
            </table>
        </ContainerTable>
    )
}