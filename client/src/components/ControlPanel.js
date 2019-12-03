import React, { Component } from 'react'
import axios from 'axios'; 

export default class ControlPanel extends Component {
    constructor(props) {
        super(props); 
        this.state = {
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
