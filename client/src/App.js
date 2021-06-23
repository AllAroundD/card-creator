import "./App.scss";
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Cookies from 'js-cookie'


import Splash from "./Components/Splash";
// import Card from './Components/Card';
import Actions from "./Components/Actions";
import Drawer from "./Components/Drawer";
import CardEdit from "./Components/cards/CardEdit";
import DecksList from "./Components/decks/DecksList";
import DeckCreate from "./Components/decks/DeckCreate";
import DeckEdit from "./Components/decks/DeckEdit";
import CardsList from "./Components/cards/CardsList";
import CardCreate from "./Components/cards/CardCreate";
import CardView from "./Components/cards/CardView";
import NotFound from "./Components/layout/NotFound";

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