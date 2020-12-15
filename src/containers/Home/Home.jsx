import React from 'react'
import NewsSection from '../NewsSection/NewsSection';
import './Home.css'

const Home = (props) => {
    let searchResult;
        if(props.searchQuery !== ''){
            searchResult = (<div>{`Searching for ${props.searchQuery}`}</div>)
        }else{
            searchResult = (<div>Search for stocks using the search bar</div>)
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