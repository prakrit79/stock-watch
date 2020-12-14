import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import './DashboardContainer.css'

class DashboardContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasInput: false,input:null}
    }

    render(){
        return(
            <div className='dashboard-container'>
                <Dashboard companyLabel={'TSLA'} />
                <Dashboard companyLabel={'AAPL'} />
                <Dashboard companyLabel={'NIO'} />
                <Dashboard companyLabel={'AC.TO'} />
            </div>
        )  
    }
}

export default DashboardContainer;