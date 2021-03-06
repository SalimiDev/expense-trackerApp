import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <div className='w-screen min-h-screen flex flex-col justify-center items-center font-Lato bg-slate-800'>
                <Header />
                <div className='w-72 h-fit '>
                    <Balance />
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </div>
        </GlobalProvider>
    );
}

export default App;
