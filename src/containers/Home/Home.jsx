import React from 'react'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {hasInput: false,input:null}
    }

    render(){
        return(
            <h1>HOME page</h1>
        )  
    }
}

export default Home;