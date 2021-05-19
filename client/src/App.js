import "./App.scss";
import Splash from "./components/Splash";
// import Card from './components/Card';
import Actions from "./components/Actions";
import Drawer from "./components/Drawer";
import CardEdit from "./components/cards/CardEdit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DecksList from "./components/decks/DecksList";
import DeckCreate from "./components/decks/DeckCreate";
import DeckEdit from "./components/decks/DeckEdit";
import CardsList from "./components/cards/CardsList";
import CardCreate from "./components/cards/CardCreate";
import CardView from "./components/cards/CardView";
import NotFound from "./components/layout/NotFound";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/cardcreate">
              <Actions />
              <CardCreate />
            </Route>
            <Route path="/cardedit/:id">
              <Actions />
              <CardEdit />
            </Route>
            <Route path="/deckedit/:id">
              <Actions />
              <DeckEdit />
            </Route>
            <Route exact path="/deckcreate">
              <Actions />
              <DeckCreate />
            </Route>
            <Route exact path="/">
              <Actions />
              <Splash />
              <Drawer>
                <CardsList context={"review"} />
              </Drawer>
              <Drawer>
                <DecksList context={"review"} />
              </Drawer>
            </Route>
            <Route path="/card/">
              <Actions />
              <CardView />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
