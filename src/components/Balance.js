import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const balanceAmount = transactions.map(transaction => transaction.amount);
    const totalAmount = balanceAmount.reduce((total, number) => total + number, 0).toFixed(2);

    return (
        <>
            <h4 className='font-Lato text-white font-medium'>YOUR BALANCE</h4>
            <h1 className='font-Lato text-white text-4xl'>${totalAmount}</h1>
        </>
    );
};

export default Balance;
