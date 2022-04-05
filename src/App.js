import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';

function App() {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center font-Lato bg-slate-800'>
            <Header />
            <div className='w-72 h-fit '>
                <Balance />
                <IncomeExpenses />
                <TransactionList />
            </div>
        </div>
    );
}

export default App;
