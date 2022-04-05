import React from 'react';

const TransactionList = () => {
    return (
        <>
            <h3 className='mt-2 text-white font-medium pb-1 border-b-2 border-gray-500'>History</h3>
            <ul className='my-3'>
                <li className=' w-full bg-white mb-3 p-1 relative flex flex-row justify-between items-center text-gray-600 border-r-4 border-green-400 shadow-lg'>
                    Cash <span className=' '>-$400</span>
                    <button className='absolute bg-red-500 cursor-pointer w-7 h-7  rounded-lg left-0 -translate-x-8 '>
                       X
                    </button>
                </li>
            </ul>
        </>
    );
};

export default TransactionList;
