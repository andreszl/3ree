import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomeContent extends Component{
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                         <Link to="/About">About</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default HomeContent