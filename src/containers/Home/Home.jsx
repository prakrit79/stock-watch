import React from 'react'
import NewsSection from '../NewsSection/NewsSection';
import './Home.css'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasInput: false,input:null}
    }

    render(){
        return(
            <div className='home-container'>
                <h1>Stockify</h1>
                <div className='main-content'>
                    <div className='news-section'>
                        <h2>Latest News</h2>
                        <NewsSection newsCategory={'general'}/>
                    </div>
                    <div className='trending-stocks'>
                        <h2>Trending Stocks</h2>
                    </div>
                </div>
            </div>
        )  
    }
}

export default Home;