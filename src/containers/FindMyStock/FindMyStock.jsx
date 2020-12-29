import React from 'react'
import {getMarketMovers} from '../../api/api'
import './FindMyStock.css'

class FindMyStock extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoaded: false,marketMoversData:JSON.parse(localStorage.getItem('marketMovers')),error:null}
    }

    componentDidMount(){
        if(localStorage.getItem('marketMovers') == null){
            console.log('Fetching market data from API')
            getMarketMovers().then((results)=>{
                const moversData = results.data.finance
                console.log('Market mover results',moversData);
                localStorage.setItem('marketMovers',JSON.stringify(moversData));
                this.setState({
                    isLoaded: true,
                    marketMoversData: moversData
                })
            })
        }else{
            const storageData = JSON.parse(localStorage.getItem('marketMovers'))
            console.log('Fetching market data from local storage',storageData);
            this.setState({
                isLoaded: true,
                marketMoversData: storageData
            })
        }   
    }

    render(){
        const {error,isLoaded,marketMoversData} = this.state;
        const gainers = marketMoversData.finance.result[0].quotes;
        const losers = marketMoversData.finance.result[1].quotes;
        const actives = marketMoversData.finance.result[2].quotes;

        if(error){
            return (<div> Error </div>)
        }else if(!isLoaded){
            return (<div>Loading....</div>)
        }else{
            return(
                    <div className='main-content'>
                        <div className='most-active'>
                            <h2>Most active</h2>
                            {actives.map((stock)=>{
                                return <p key={stock.symbol}>{stock.symbol}</p>
                            })}                         
                        </div>
                        <div className='day-gainers'>
                            <h2>Day gainers</h2>
                            {gainers.map((stock)=>{
                                return <p key={stock.symbol}>{stock.symbol}</p>
                            })}   
                        </div>
                        <div className='day-losers'>
                            <h2>Day losers</h2>
                            {losers.map((stock)=>{
                                return <p key={stock.symbol}>{stock.symbol}</p>
                            })}   
                        </div>
                    </div>
            )
        }    
    }
}

export default FindMyStock;