import React from 'react';

const IncomeExpenses = () => {
    return (
        <div className='w-full bg-white flex items-center flex-row mt-5 '>
            <div className='w-1/2 bg-white p-5 flex flex-col justify-center items-center uppercase shadow-lg'>
                <h4>Income</h4>
                <p className='text-lg text-green-500 mt-2'>+$0.00</p>
            </div>
            <div className='w-1/2 bg-white p-5 flex flex-col justify-center items-center border-l-2 uppercase shadow-lg'>
                <h4>Expense</h4>
                <p className='text-lg text-red-500 mt-2'>-$0.00</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;
