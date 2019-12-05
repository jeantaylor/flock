/// Import Libraries 
import React, { Component } from 'react'

/// Import Components
import AddTodo from './Todo/AddTodo'; 
import TodoCard from './Todo/TodoCard'; 

export default class Notebook extends Component {
    render() {
        return (
            <>
                <div>--- NOTEBOOK ---</div>
                <AddTodo />
                <TodoCard todos = {this.props.todos} />
            </>
        )
    }
}