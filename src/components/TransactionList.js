import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3 className='mt-5 mb-3 text-white font-medium pb-1 border-b-2 border-gray-500'>History</h3>
            <ul className='h-32 my-3 overflow-y-auto '>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </>
    );
};

export default TransactionList;
