import './App.css';
import Splash from './Components/Splash';
import Card from './Components/Card';
import LeftDrawer from './Components/LeftDrawer'

function App() {
  return (
    <div className="app">
      <LeftDrawer />
      <Splash />
      <h1>This is the app</h1>
            This is the main
      <Card />
    </div>
  );
}

export default App;
