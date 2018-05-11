import React, { Component } from 'react'

class HomeContent extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <p>Home text</p>
            </div>
        )
    }
}

export default HomeContent