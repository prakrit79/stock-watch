import './App.css';
import Dashboard from './containers/Dashboard/Dashboard'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './containers/Home/Home';



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <h1>Welcome to your financial planner</h1>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route 
              exact 
              path='/dashboard' 
              render={() => (
                <Dashboard companyLabel={'TSLA'} />
               )}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
