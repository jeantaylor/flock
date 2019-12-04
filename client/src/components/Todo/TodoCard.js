/// Imports
import React, { Component } from 'react'; 
import axios from 'axios'; 

import StatusBtn from './TodoStatusBtn'; 
import Txt from './TodoTxt'; 
import Kbab from './TodoKbab'; 

export default class TodoCard extends Component {
 
    componentDidUpdate() {
        const todos = this.props.todos; 
        console.log("These have been given to me by my parent: TodoList.js"); 
        console.log(todos); 
    };


    render() {
        return (
            <div>
                <div>We are Legion. We are many TodoCards.</div>
            </div>
        )
    }
}
