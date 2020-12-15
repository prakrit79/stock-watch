import React from 'react'
import { Link } from 'react-router-dom';
import {Search} from '../../components/Search/Search'
import './NavBar.css'

export class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {searchInput:''}
    }

    onChange = (event) =>{
        console.log('On change is getting called with input value',event.target.value);
        this.setState({searchInput:event.target.value});
    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.performSearch(this.state.searchInput);
        this.setState({searchInput:''});
    }

    render(){
        return(
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
            <Search inputValue={this.state.searchInput} onChange={this.onChange} onSubmit={this.onSubmit}/>
        </div>
        )  
    }
}

export default NavBar;