import React from 'react'
import {getNews} from '../../api/api'
import {InfoTile} from '../../components/InfoTile/InfoTile'

class NewsSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {isLoaded: false,newsData:null,error:null}
    }

    componentDidMount(){
        getNews(this.props.newsCategory).then((result)=>{
            console.log(result.data);
            this.setState({
                isLoaded: true,
                newsData: result.data
            })
        })
    }

    render(){
        const {error,newsData,isLoaded} = this.state;
        if(error){
            return (<div> Error </div>)
        }else if(!isLoaded){
            return (<div>Loading....</div>)
        }else{
            const topTenNews = newsData.slice(0,10);
            return(
                    topTenNews.map((newsItem,index)=>{
                        return <InfoTile id={index} info={newsItem}/>
                    })
            )
        }    
    }
}

export default NewsSection;