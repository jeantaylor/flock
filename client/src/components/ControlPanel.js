/// Imports
import React, { Component } from 'react'
import axios from 'axios'; 

/// Const Variables
const prefUrl = "http://localhost:8080/settings/"


export default class ControlPanel extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: "jean", 
            userId: "5de334329e70eb23286d8b40",
            settings: []
        }
    }

    /// Function Declariations

    // componentDidMount() {
        
    // }

    render() {
        return (
            <div>
                I'm a ControlPanel component!
            </div>
        )
    }
}
