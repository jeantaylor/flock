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
                <AddTodo createTodo = {this.props.createTodo} />
                <TodoCard 
                    todos = {this.props.todos} 
                    updateTxt = {this.props.updateTxt} 
                    updateStatus = {this.props.updateStatus} 
                    deleteTodo = {this.props.deleteTodo}
                />
            </>
        )
    }
}