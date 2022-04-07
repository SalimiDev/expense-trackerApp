import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState([]);
    const [amount, setAmount] = useState(0);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
        };
        addTransaction(newTransaction);
    };
    return (
        <>
            <h3 className='mt-5 mb-3 text-white font-medium pb-1 border-b-2 border-gray-500 font-Lato'>
                Add new transaction
            </h3>
            <form onSubmit={onSubmit} className='text-white h-fit font-Lato'>
                <div className='h-16 justify-between flex flex-col '>
                    <label htmlFor='text'>Text</label>
                    <input
                        className='text-black p-1'
                        value={text}
                        onChange={e => setText(e.target.value)}
                        type='text'
                        placeholder='Enter text...'
                    />
                </div>

                <div className='h-24 justify-between flex flex-col mt-4 '>
                    <label htmlFor='amount'>
                        Amount
                        <br />
                        (negative-expense,positive-income)
                    </label>
                    <input
                        className='text-black p-1'
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        type='number'
                        placeholder='Enter amount...'
                    />
                </div>
                <button className='w-full bg-pink-800 p-3 flex justify-center items-center mt-4'>Add transaction</button>
            </form>
        </>
    );
};

export default AddTransaction;
