import React from 'react'

class FindMyStock extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasInput: false,input:null}
    }

    render(){
        return(
            <div className='findMyStock-container'>
                <h1>Find the right stocks for you</h1>
            </div>
        )  
    }
}

export default FindMyStock;