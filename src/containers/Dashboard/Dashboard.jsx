import React from 'react'
import {getCompanyProfile} from '../../api/api'
import { CompanyCard } from '../../components/CompanyCard/CompanyCard';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoaded: false,companyData:null,error:null}
    }

    componentDidMount(){
        getCompanyProfile(this.props.companyLabel).then((results)=>{
            console.log('Dashboard results',results);
            this.setState({
                isLoaded: true,
                companyData: {profileData:results[0].data, priceData: results[1].data}
            })
        })
    }

    render(){
        const {error,companyData,isLoaded} = this.state;
        if(error){
            return (<div> Error </div>)
        }else if(!isLoaded){
            return (<div>Loading....</div>)
        }else{
            return(
                <CompanyCard companyData={companyData}/>
            )
        }    
    }
}

export default Dashboard;