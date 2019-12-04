/// Imports
import React, { Component } from 'react'; 
import axios from 'axios'; 

import StatusBtn from './TodoStatusBtn'; 
import Content from './TodoContent'; 
import Kbab from './TodoKbab'; 

export default class TodoContainer extends Component {
    
    componentDidUpdate() {
        const todos = this.props.todos; 
        console.log("These have been given to me by my parent:"); 
        console.log(todos); 
    }; 

    render() {
        return (
            <div>
                <div>We are Legion. We are many TodoContainer.</div>
                <StatusBtn />
                <Content />
                <Kbab />
            </div>
        )
    }
}
