import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';

function App() {
    return (
        <div className='App'>
            <Header />
            <div className='Container'>
                <Balance />
            </div>
        </div>
    );
}

export default App;
