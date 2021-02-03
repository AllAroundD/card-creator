import './App.css';
import Splash from './components/Splash';
// import Card from './Components/Card';
import Actions from './components/Actions'
import CardsList from './components/CardsList';
import Drawer from './components/Drawer';
import DeckList from './components/DeckList';
import CardEdit from './components/CardEdit';
import DeckEdit from './components/DeckEdit';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DeckCreate from './components/DeckCreate';
import CardCreate from './components/CardCreate';

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/cardcreate">
                        <Actions />
                        <CardCreate />
                    </Route>
                    <Route path="/cardedit">
                        <Actions />
                        <CardEdit />
                    </Route>
                    {/* <Route path="/deckedit">
                        <Actions />
                        <DeckEdit />
                    </Route> */}
                    <Route path="/deckcreate">
                        <Actions />
                        {/* <DeckCreate /> */}
                    </Route>
                    <Route path="/">
                        <Actions />
                        <Splash />
                        <Drawer>
                            <CardsList />
                            {/* <DeckList /> */}
                        </Drawer>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
