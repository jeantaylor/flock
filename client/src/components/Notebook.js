import React, { Component } from 'react'
import axios from 'axios'; 

import TodoContainer from './Todo/TodoContainer'; 

export default class Notebook extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            todoData: {}
        }
    }

    /// Function Declariations

    // componentDidMount() {
        
    // }

    render() {
        return (
            <div>
                I'm a Notebook component!
            </div>
        )
    }
}
