import React from 'react';

const Transaction = ({ transaction }) => {
    return (
        <li className=' w-full bg-white mb-3 p-1 relative flex flex-row justify-between items-center text-gray-600 border-r-4 border-green-400 shadow-lg'>
            {transaction.text} <span>{transaction.amount}</span>
            <button className='absolute bg-red-500 cursor-pointer w-full h-8  left-0 opacity-0 hover:opacity-60'>X</button>
        </li>
    );
};

export default Transaction;
