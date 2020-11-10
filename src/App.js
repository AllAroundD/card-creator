import './App.css';
import Splash from './Components/Splash';
// import Card from './Components/Card';
import LeftDrawer from './Components/LeftDrawer'
import CardsList from './Components/CardsList';
import DeckList from './Components/DeckList';
import CardEdit from './Components/CardEdit';

function App() {
    return (
        <div className="app">
            <LeftDrawer />
            <Splash />
            {/* <h1>This is the app</h1> */}
            <CardsList />
            <hr />
            <DeckList />
            <hr />
            <CardEdit />
        </div>
    );
}

export default App;
