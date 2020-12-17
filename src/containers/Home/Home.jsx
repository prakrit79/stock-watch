import React from 'react'
import Dashboard from '../Dashboard/Dashboard';
import Quote from '../Quote/Quote'
import NewsSection from '../NewsSection/NewsSection';
import './Home.css'

const Home = (props) => {
    let searchResult;
        if(props.searchQuery !== ''){
            searchResult = 
            (<div className="search-body">
                <Dashboard companyLabel={props.searchQuery}/>
                <Quote companyLabel={props.searchQuery}/>
            </div>)
        }else{
            searchResult = (<></>)
        }
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
                        {searchResult}
                    </div>
                </div>
            </div>
        )  
}

export default Home;