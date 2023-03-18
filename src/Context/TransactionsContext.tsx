import {api} from '../lib/axios'
import React, { 
    createContext,
    useState, 
    useEffect, 
    useCallback 
} from "react";

type ChildrenProp = {
    children : React.ReactNode
}

export interface ITransaction {
    id: number,
    title: string,
    category: string,
    price: number,
    type : { withDown: number, deposit: number } 
    createdAt : string,
}

export interface ICreateTransactionInput {
    title: string,
    price : string,
    category : string,
    type: { withDown?: string, deposit?: string},
}

interface ITransactionInputTypes { 
    transactions : ITransaction[],
    setTransactions : (transactions:ITransaction[]) => void,
    createTransaction : (data :ICreateTransactionInput) => Promise<void>
    fetchTransactions: (query: string) => Promise<void>
} 

export const transactionsContext = createContext<ITransactionInputTypes>(
    {} as ITransactionInputTypes
)

export const TransactionsContextProvider = ({children}: ChildrenProp) => {

    const [transactions, setTransactions] = useState<ITransaction[]>([])
    
    useEffect(() => {
        api.get('/transactions')
        .then(res => setTransactions(res.data))
        .catch(e => console.error(e)) 
        console.log(transactions)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const createTransaction = useCallback(async (data:ICreateTransactionInput ) => {

        const response = await api.post('/transactions',{
            ...data,
            createdAt: new Date()
        })

        setTransactions(prev => [response.data, ...prev])
    },[])

    const fetchTransactions = useCallback(async(query?: string) => {

        const response = await api.get('/transactions',{
            params: {
                q: query,
            }
        })

        console.log(response.data)
        setTransactions(response.data)
    },[])

    useEffect(() => {
        fetchTransactions()
    },[fetchTransactions])


    return (
        <transactionsContext.Provider 
         value= {{setTransactions, transactions, createTransaction, fetchTransactions}}>
            {children}
        </transactionsContext.Provider>
    )
}
