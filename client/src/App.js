import "./App.scss";
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Cookies from 'js-cookie'


import Splash from "./components/Splash";
// import Card from './components/Card';
import Actions from "./components/Actions";
import Drawer from "./components/Drawer";
import CardEdit from "./components/cards/CardEdit";
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
  // const [auth,setAuth] = React.useState(false)
  // const readCookie = () => {
  //   const user = Cookies.get('user')
  //   if (user) {setAuth(true)}
  //   React.useEffect(()=>{
  //     readCookie()
  //   }, [])
  // }
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/cardcreate">
              <Actions />
              <CardCreate />
            </Route>
            <Route path="/cardedit">
              <Actions />
              <CardEdit />
            </Route>
            <Route path="/deckedit">
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