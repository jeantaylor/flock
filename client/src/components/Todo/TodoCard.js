/// Imports
import React, { Component } from 'react'; 

import StatusBtn from './TodoStatusBtn'; 
import View from './TodoView'; 
import Edit from './TodoEdit';
import Kbab from './TodoKbab'; 

export default class TodoCard extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            mode: "view"
        }
    }

    componentDidUpdate() {
        const todos = this.props.todos; 
        // console.log("These have been given to me by my parent: TodoList.js"); 
        // console.log(todos); 
    };


    render() {
        const view = this.state.mode === "view"; 


        let newCards = this.props.todos.map( todo => {
            return (
                <article 
                    key = {todo._id} 
                    id = {todo._id} 
                >
                    <StatusBtn 
                        id = {todo._id}
                        status = {todo.status} />
                    {
                        view 
                            ? <View 
                                id = {todo._id}
                                txt = {todo.txt} 
                            />
                            : <Edit 
                                id = {todo._id}
                                txt = {todo.txt} 
                            />
                    }
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
