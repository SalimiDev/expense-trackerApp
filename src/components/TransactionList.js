import React from 'react';

const TransactionList = () => {
    return (
        <>
            <h3 className='mt-5 mb-3 text-white font-medium pb-1 border-b-2 border-gray-500'>History</h3>
            <ul className='h-32 my-3 overflow-y-auto '>
                <li className=' w-full bg-white mb-3 p-1 relative flex flex-row justify-between items-center text-gray-600 border-r-4 border-green-400 shadow-lg'>
                    Cash <span className=' '>-$400</span>
                    <button className='absolute bg-red-500 cursor-pointer w-full h-8  left-0 opacity-0 hover:opacity-60'>
                        X
                    </button>
                </li>
            </ul>
        </>
    );
};

export default TransactionList;
