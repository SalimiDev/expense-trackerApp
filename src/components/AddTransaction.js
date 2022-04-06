import React from 'react';

const AddTransaction = () => {
    return (
        <>
            <h3 className='mt-5 mb-3 text-white font-medium pb-1 border-b-2 border-gray-500 font-Lato'>Add new transaction</h3>
            <form className='text-white h-fit font-Lato'>
                <div className='h-16 justify-between flex flex-col '>
                    <label htmlFor='text'>Text</label>
                    <input className='text-black p-1' type='text' placeholder='Enter text...' />
                </div>

                <div className='h-24 justify-between flex flex-col mt-4 '>
                    <label htmlFor='amount'>
                        Amount
                        <br />
                        (negative-expense,positive-income)
                    </label>
                    <input className='text-black p-1' type='number' placeholder='Enter amount...' />
                </div>
                <button className='w-full bg-pink-800 p-3 flex justify-center items-center mt-4'>Add transaction</button>
            </form>
        </>
    );
};

export default AddTransaction;
