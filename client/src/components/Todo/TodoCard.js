/// Import Libraries
import React, { Component } from 'react'; 

/// Import Components
import StatusBtn from './TodoStatusBtn'; 
import Kbab from './TodoKbab'; 

export default class TodoCard extends Component {
    render() {
        const updateTodo = this.props.updateTodo; 
        const deleteTodo = this.props.deleteTodo; 

        let newCards = this.props.todos.map( todo => {
            return (
                <article 
                    key = {todo._id} 
                    id = {todo._id} 
                >
                    <StatusBtn 
                        id = {todo._id}
                        status = {todo.status} />
                    <form 
                        id = {todo._id} 
                        onSubmit = {updateTodo}
                    >
                        <input 
                            name = 'txt'
                            placeholder = {todo.txt} 
                        />
                        <button type='submit'>save</button>
                    </form>
                    <Kbab 
                        id = {todo._id} 
                        deleteTodo = {deleteTodo} 
                    />
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
