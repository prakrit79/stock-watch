import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home/Home';
import DashboardContainer from './containers/DashboardContainer/DashboardContainer';
import FindMyStock from './containers/FindMyStock/FindMyStock';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <h1>Welcome to your financial planner</h1>
          <div className='nav-bar'>
            <ul>
              <li>
                <Link to='/' style={{textDecoration:'none'}}>Home</Link>
              </li>
              <li>
                <Link to='/dashboard' style={{textDecoration:'none'}}>Dashboard</Link>
              </li>
              <li>
                <Link to='/findMyStock' style={{textDecoration:'none'}}>Find My Stock</Link>
              </li>   
            </ul>
            <div className='search-bar'>
              This is the Search bar for stocks
            </div>
          </div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/dashboard' component={DashboardContainer}/>
            <Route exact path='/findMyStock' component={FindMyStock}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
