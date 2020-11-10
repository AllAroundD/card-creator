import './App.css';
import Splash from './Components/Splash';
// import Card from './Components/Card';
import Actions from './Components/Actions'
import CardsList from './Components/CardsList';
import Drawer from './Components/Drawer'

function App() {
    return (
        <div className="app">
            <Actions />
            <Splash />
            <h1>This is the app</h1>
            <Drawer>
                <CardsList />
            </Drawer>
        </div>
    );
}

export default App;
