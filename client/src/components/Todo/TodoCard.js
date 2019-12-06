/// Import Libraries
import React, { Component } from 'react'; 

/// Import Components
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
                    <form id = {todo.id}>
                        <input 
                            placeholder = {todo.txt} 
                        />
                        <button type="submit">save</button>
                    </form>
                    <Kbab id = {todo._id} />
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
