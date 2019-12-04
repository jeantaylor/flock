/// Imports
import React, { Component } from 'react'

export default class TodoView extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div>
            <span>VIEWING:: </span>
                {this.props.txt}
            </div>
        )
    }
}
