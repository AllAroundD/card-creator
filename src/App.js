import './App.css';
import Splash from './Components/Splash';
// import Card from './Components/Card';
import Actions from './Components/Actions'
import CardsList from './Components/CardsList';
import Drawer from './Components/Drawer';
import DeckList from './Components/DeckList';
import CardEdit from './Components/CardEdit';

function App() {
    return (
        <div className="app">
            <Actions />
            <Splash />
            <h1>This is the app</h1>
            <Drawer>
                <CardsList />
            </Drawer>
            <Drawer>
                <DeckList />
            </Drawer>
        </div>
    );
}

export default App;
