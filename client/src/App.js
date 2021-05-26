import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Cookies from 'js-cookie'
import React from 'react'
import Login from './components/Login'
import ProtectedLogin from './components/ProtectedLogin'
import ProtectedRoute from './components/ProtectedRoute'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'

import { Provider } from "react-redux";
import store from "./store";

import Splash from "./components/Splash";
// import Card from './components/Card';
import Actions from "./components/Actions";
import CardsList from "./components/cards/CardsList";
import Drawer from "./components/Drawer";
import CardEdit from "./components/cards/CardEdit";
import DecksList from "./components/decks/DecksList";
// import DeckEdit from "./components/decks/DeckEdit";
import DeckCreate from "./components/decks/DeckCreate";
import CardCreate from "./components/cards/CardCreate";
import NotFound from "./components/layout/NotFound";
import CardView from "./components/cards/CardView";

function App() {
  if(localStorage.token) {
    // set the token with the header
    setAuthToken(localStorage.token)
  }
  React.useEffect(() => {
    store.dispatch(loadUser())
  }, [])   // only runs at initial load
  
  // const [auth,setAuth] = React.useState(false)
  // const readCookie = () => {
  //   const user = Cookies.get('user')
  //   if (user) {setAuth(true)}
  // }
  // React.useEffect(()=>{
  //   readCookie()
  // }, [])
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Switch>
            <ProtectedLogin path='/login'>
              <Login />
            </ProtectedLogin>
            <ProtectedRoute exact path="/cardcreate">
              <Actions />
              <CardCreate />
            </ProtectedRoute>
            <ProtectedRoute path="/cardedit">
              <Actions />
              <CardEdit />
            </ProtectedRoute>
            <ProtectedRoute path="/deckedit">
              <Actions />
              {/* <DeckEdit /> */}
            </ProtectedRoute>
            <ProtectedRoute exact path="/deckcreate">
              <Actions />
              <DeckCreate />
            </ProtectedRoute>
            <ProtectedRoute exact path="/">
              <Actions />
              <Splash />
              <Drawer>
                <CardsList context={"review"} />
              </Drawer>
              <Drawer>
                <DecksList context={"review"} />
              </Drawer>
            </ProtectedRoute>
            <ProtectedRoute path="/card/">
              <Actions />
              <CardView />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
