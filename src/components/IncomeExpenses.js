import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(item => item.amount);
    //Calculate incomes
    const income = amounts
        .filter(amount => amount > 0)
        .reduce((total, number) => total + number, 0)
        .toFixed(2);
    //Calculate espenses
    const expense = amounts
        .filter(amount => amount < 0)
        .reduce((total, number) => total + number, 0)
        .toFixed(2);

    return (
        <div className='w-full bg-white flex items-center flex-row mt-5 '>
            <div className='w-1/2 bg-white p-5 flex flex-col justify-center items-center uppercase shadow-lg'>
                <h4>Income</h4>
                <p className='text-lg text-green-500 mt-2'>+${income}</p>
            </div>
            <div className='w-1/2 bg-white p-5 flex flex-col justify-center items-center border-l-2 uppercase shadow-lg'>
                <h4>Expense</h4>
                <p className='text-lg text-red-500 mt-2'>-${expense}</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;
