import React, { 
    createContext,
    useState, 
    useEffect, 
    useCallback 
} from "react";

import axios from 'axios';

type ChildrenProp = {
    children : React.ReactNode
}

export interface ITransaction {
    id: number,
    title: string,
    category : string,
    price: number,
    type :  any,
    createdAt : string,
}

export interface ITransactionInput {
    title: string,
    price : string,
    category : string,
    type : any,
}

interface ITransactionInputTypes { 
    transactions : ITransaction[],
    setTransactions : (transactions:ITransaction[]) => void,
    onSubmitData : (data :ITransactionInput) => Promise<void>
    fetchTransactions: (query: string) => Promise<void>
} 

export const CreateTransactions = createContext<ITransactionInputTypes>({} as ITransactionInputTypes)


export const TransactionsContextProvider = ({children}: ChildrenProp)=> {

    const url = 'http://localhost:3000/transactions'

    const [transactions, setTransactions] = useState<ITransaction[]>([])
    
    useEffect(() => {
        axios.get(url)
        .then(res => setTransactions(res.data))
        .catch(e => console.error(e)) 
        console.log(transactions)
    },[url])


    const onSubmitData = useCallback(async (data:ITransactionInput ) => {

        await axios.post(url,{
            ...data,
            createdAt: new Date(),
        })

        //const json =  response.data.data

        //setTransactions(prev => [...prev, json])
        
        console.log(transactions)
    },[])

    const fetchTransactions = useCallback(async(query?: string) => {

        const response = await axios.get(url,{
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


    return <CreateTransactions.Provider value= {{setTransactions,transactions, onSubmitData, fetchTransactions}} >
        {children}
    </CreateTransactions.Provider>

}
