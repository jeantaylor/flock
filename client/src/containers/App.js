/// Import Libraries
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'; 

/// Import Components
import Dock from '../components/Dock'; 
import Notebook from '../components/Notebook'; 
import ControlPanel from '../components/ControlPanel'; 
import Axios from 'axios';

/// Const Variables 
const currentUserId = '5de334329e70eb23286d8b40'; 
const userUrl = `http://localhost:8080/user/${currentUserId}`; 

export default class App extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            userData: []
        }
    }

    componentDidMount() {
        Axios.get(userUrl)
            .then (res => {
                this.setState({userData: res.data}); 
            })
    }

    render() {
        if (this.state.userData.length === 0) {
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
                            render = {props => {
                                return (
                                    <Notebook todos = {this.state.userData.todos} />
                                )
                            }}
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
