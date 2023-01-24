import {Header} from './components/Header/index'
import { GlobalStyle } from './Styles/global';
import {Dashboard} from '../src/components/Dashboard/index';
import {Search} from '../src/components/Search'
import {TableTransaction} from '../src/components/TableTransaction'
import {NewTransactionModal} from '../src/components/NewTransactionModal/index'
import {useEffect, useState} from 'react'
import Modal from 'react-modal'
import { TransactionsContextProvider } from './Context/TransactionsContext';


function App() {
  

  const [isModalTransactionOpen, setIsModalTransactionOpen] = useState(false)

  Modal.setAppElement('#root')

 
  
  return (
    <>
      <TransactionsContextProvider>
        <Header 
        onOpenModalTransaction={() => setIsModalTransactionOpen(true)}
        /> 
        <Dashboard/>
        <Search/>
        <TableTransaction />
        <NewTransactionModal
        isOpen={isModalTransactionOpen}
        onRequestClose={() => setIsModalTransactionOpen(false)}
        />
      </TransactionsContextProvider>

      <GlobalStyle/> 
    </>
    );
}

export default App;
