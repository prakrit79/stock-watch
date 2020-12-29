import React from 'react'
import { getQuote} from '../../api/api'
import { QuoteCard } from '../../components/QuoteCard/QuoteCard';

class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoaded: false,quoteData:null,error:null}
    }

    componentDidMount(){
        getQuote(this.props.companyLabel).then((result)=>{
            console.log(result);
            this.setState({
                isLoaded: true,
                quoteData: result.data
            })
        })
    }

    render(){
        const {error,quoteData,isLoaded} = this.state;
        if(error){
            return (<div> Error </div>)
        }else if(!isLoaded){
            return (<div>Loading....</div>)
        }else{
            return(
                <QuoteCard quoteData={quoteData}/>
            )
        }    
    }
}

export default Quote;