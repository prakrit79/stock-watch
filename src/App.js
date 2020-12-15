import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import DashboardContainer from './containers/DashboardContainer/DashboardContainer';
import FindMyStock from './containers/FindMyStock/FindMyStock';
import NavBar from './containers/NavBar/NavBar';
import React from 'react';


export class App extends React.Component {

  constructor(){
    super();
    this.state = {searchQuery: ''};
  }

  performSearch = (queryString) => {
    console.log('Performing search with',queryString)
    this.setState({searchQuery:queryString});
  }

  render(){
    return (
      <div className="App">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Router>
          <div>
            <h1>Welcome to your financial planner</h1>
            <NavBar searchQuery={this.state.searchQuery} performSearch={this.performSearch}/>
            <Switch>
              <Route exact path='/' render={()=><Home searchQuery={this.state.searchQuery}/>}/>
              <Route exact path='/dashboard' component={DashboardContainer}/>
              <Route exact path='/findMyStock' component={FindMyStock}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
  
}

export default App;
