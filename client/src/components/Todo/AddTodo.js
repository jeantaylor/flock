/// Import Libraries
import React, { Component } from 'react'

export default class AddTodo extends Component {
    render() {
        return (
            <form>
                <input 
                    placeholder = "Give me Todos to digest!"
                />
                <button type="submit">Plus Bucket</button>
            </form>
        )
    }
}
