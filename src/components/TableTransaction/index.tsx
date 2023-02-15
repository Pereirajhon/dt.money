import {ContainerTable} from './styles' ;
import {useContext} from 'react';
import {transactionsContext} from '../../Context/TransactionsContext'
import { currencyFormatter, dateFormatter } from '../../utils/formatter';

export const TableTransaction = () => {
    
    const {transactions} = useContext(transactionsContext)

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
                                <td 
                                 className={transaction.type?.withDown?
                                 'positive': 'negative'}
                                >
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