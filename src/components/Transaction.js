import React from 'react';

const Transaction = ({ transaction }) => {
    const { text, amount } = transaction;
    const sign = amount < 0 ? '-' : '+';
    return (
        <li
            className={
                ' w-full bg-white mb-3 p-1 relative flex flex-row justify-between items-center text-gray-600 border-r-4  shadow-lg ' +
                (amount < 0 ? 'border-red-600' : 'border-green-500')
            }>
            {text}
            <span>
                {sign}${Math.abs(amount)}
            </span>
            <button className='absolute bg-red-500 cursor-pointer w-full h-8  left-0 opacity-0 hover:opacity-60'>X</button>
        </li>
    );
};

export default Transaction;
