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
import CardCreate from './Components/CardCreate';

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
