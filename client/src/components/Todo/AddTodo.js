/// Import Libraries
import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <form 
                onSubmit = {this.props.createTodo}
            >
                <input 
                    name = 'txt'
                    placeholder = 'What to do?'
                />
                <button type='submit'>Plus Bucket</button>
            </form>
        )
    }
}
