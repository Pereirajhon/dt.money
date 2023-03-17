import { DashboardContainer, Card } from "./styles"
import arrowDown from '../../assets/arrow-circle-down-regular.svg';
import arrowUp from '../../assets/arrow-circle-up-regular.svg';
import dolarTotal from '../../assets/currency-dollar-regular.png';

import { useContext } from "react";
import { transactionsContext } from "../../Context/TransactionsContext";
import { currencyFormatter } from "../../utils/formatter";

export const Dashboard = () => {

  const {transactions} = useContext(transactionsContext)

  const summaryTotal = transactions.reduce((acc, transaction)=> {
      if(transaction.type?.withDown){
        acc.withDowns += transaction.price
        acc.total += transaction.price
  
      }else {
        acc.deposits -= transaction.price
        acc.total -= transaction.price
      }
        return acc ;
      },{
        deposits : 0,
        withDowns : 0,
        total: 0
      })

  console.log(summaryTotal)

    return (

      <DashboardContainer>
        <Card>
          <header>
            <p>Entrada</p>  
            <img src={arrowUp} alt= 'icone de entrada' />
          </header>
          <strong>{ currencyFormatter.format(summaryTotal.withDowns) }</strong>

        </Card>
        <Card>
            <header>
              <p>Saída</p> 
              <img src={arrowDown} alt='icone de saída' />
            </header>      
            <strong>{ currencyFormatter.format(summaryTotal.deposits) }</strong>
        </Card>
        <Card >
            <header>
              <p>Total</p> 
              <img src={dolarTotal} alt='icone dólar' />
            </header>
            <strong>{currencyFormatter.format(summaryTotal.total) }</strong>
        </Card>

      </DashboardContainer>

    )
}