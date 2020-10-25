import './App.css';
import Splash from './Components/Splash';
// import Card from './Components/Card';
import Inventory from './Components/Inventory'
import CardsList from './Components/CardsList';

function App() {
    return (
        <div className="app">
            <Inventory />
            <Splash />
            <h1>This is the app</h1>
            <CardsList />
        </div>
    );
}

export default App;
