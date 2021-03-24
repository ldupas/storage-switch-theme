import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Counter from './components/Counter';
import Game from './components/Game';
import ChangeModeButton from './components/ChangeModeButton';

function App() {
  return (
    <div className="App">
    <ChangeModeButton />
     <Router>
       <Switch>
         <Route exact path='/' component={Counter} />
         <Route path='/game' component={Game} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
