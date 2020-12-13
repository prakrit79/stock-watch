import React from 'react'
import {getCompanyProfile} from '../../api/api'
import { CompanyCard } from '../../components/CompanyCard/CompanyCard';

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoaded: false,companyData:null,error:null}
    }

    componentDidMount(){
        getCompanyProfile(this.props.companyLabel).then((result)=>{
            console.log(result);
            this.setState({
                isLoaded: true,
                companyData: result.data
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