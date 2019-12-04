/// Imports
import React, { Component } from 'react'
import axios from 'axios'; 

import AddTodo from './Todo/AddTodo'; 
import TodoCard from './Todo/TodoCard'; 

/// Const Variables
const todosUrl = "http://localhost:8080/todos/"

export default class Notebook extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            username: "jean", 
            userId: "5de334329e70eb23286d8b40",
            haus: "research",
            todoData: []
        }
    }


    /// Function Declariations


    componentDidMount() {
        axios.get(todosUrl + `${this.state.userId}` + "/" + `${this.state.haus}`) 
            .then( res => {
                // console.log(res.data);
                this.setState({todoData: res.data});
                // console.log(this.state.todoData);
            }
        );
    }


    render() {
        return (
            <div>
                <div>--- NOTEBOOK ---</div>
                <AddTodo 
                    userId = {this.state.userId} 
                />
                <TodoCard 
                    userId = {this.state.userId} 
                    todos = {this.state.todoData}
                />
            </div>
        )
    }
}
