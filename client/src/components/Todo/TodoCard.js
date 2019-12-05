/// Imports
import React, { Component } from 'react'; 

import StatusBtn from './TodoStatusBtn'; 
import Kbab from './TodoKbab'; 

export default class TodoCard extends Component {
    render() {
        let newCards = this.props.todos.map( todo => {
            return (
                <article 
                    key = {todo._id} 
                    id = {todo._id} 
                >
                    <StatusBtn 
                        id = {todo._id}
                        status = {todo.status} />
                    <span contentEditable>{todo.txt}</span>
                    <Kbab id = {todo._id} />
                    <p></p>
                </article>
            )
        }); 

        return (
            <section>
                {newCards}
            </section>
        ); 
    }
}
