import './App.css';
import Splash from './Components/Splash';
// import Card from './Components/Card';
import Actions from './Components/Actions'
import CardsList from './Components/CardsList';
import Drawer from './Components/Drawer';
import DeckList from './Components/DeckList';
import CardEdit from './Components/CardEdit';
import DeckEdit from './Components/DeckEdit';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DeckCreate from './Components/DeckCreate';

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/cardedit">
                        <Actions />
                        <CardEdit />
                    </Route>
                    <Route path="/deckedit">
                        <Actions />
                        <DeckEdit />
                    </Route>
                    <Route path="/deckcreate">
                        <Actions />
                        <DeckCreate />
                    </Route>
                    <Route path="/">
                        <Actions />
                        <Splash />
                        <Drawer>
                            <CardsList />
                            <DeckList />
                        </Drawer>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
