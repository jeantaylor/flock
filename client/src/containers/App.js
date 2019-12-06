/// Import Libraries
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'; 

/// Import Components
import Dock from '../components/Dock'; 
import Notebook from '../components/Notebook'; 
import ControlPanel from '../components/ControlPanel'; 
import Axios from 'axios';

/// Const Variables 
const currentHaus = 'restaurant'; 
const currentUserId = '5de334179e70eb23286d8b3e'; 
const userUrl = `http://localhost:8080/user/${currentUserId}`; 
const todosUrl = `http://localhost:8080/todos/${currentUserId}/${currentHaus}`; 
const patchTodoUrl = `http://localhost:8080/todos/edit/${currentUserId}/${currentHaus}/`


export default class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            loading: true,
            userData: {}
        }
    }

    componentDidMount() {
        Axios.get(userUrl)
            .then ( res => {
                this.setState({userData: res.data, loading: false}); 
            })
    }

    createTodo = (event) => {
        event.preventDefault(); 
        Axios({
            method: "post", 
            url: todosUrl, 
            data: {txt: event.target.txt.value}
        }).then (res => {
            this.setState(prevState => ({
                userData: { 
                    ...prevState.userData, 
                    todos: res.data.todos
                }
            }))
        })
    }

    updateTodo = (event) => {
        event.preventDefault(); 
        console.log(event.target.id); 
        console.log(event.target.txt.value); 
        Axios({
            method: "patch", 
            url: patchTodoUrl + event.target.id, 
            data: {txt: event.target.txt.value}
        }).then (res => {
            console.log(res.data.todos);

            this.setState(prevState => ({
                userData: res.data
            }))
        })
    }

    render() {

        if (this.state.loading) {
            return (
                <div>Empty</div>
            )
        } else {
            return (
                <div className = "app">
                    <Dock />

                    <Switch>
                        <Route
                            path = "/todos/:user" 
                            render = {props => 
                                    <Notebook 
                                        todos = {this.state.userData.todos} 
                                        createTodo = {this.createTodo} 
                                        updateTodo = {this.updateTodo} 
                                        {...props}
                                    />  
                            }
                        />
                        <Route 
                            path = "/settings/:user"
                            component = {ControlPanel} />
                    </Switch>
                </div>
            )
        }
    }
}
