import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';

function App() {
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center font-Lato bg-slate-800'>
            <Header />
            <div className='w-72 h-fit '>
                <Balance />
            </div>
        </div>
    );
}

export default App;
