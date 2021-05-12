import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from "react-router-dom";
import Cookies from 'js-cookie'


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
  const [auth,setAuth] = React.useState(false)
  const readCookie = () => {
    const user = Cookies.get('user')
    if (user) {setAuth(true)}
    React.useEffect(()=>{
      readCookie()
    }, [])
  }
  return (
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
            {/* <DeckEdit /> */}
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
  );
}

export default App;
