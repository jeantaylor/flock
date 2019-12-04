/// Imports
import React, { Component } from 'react'

export default class TodoEdit extends Component {
    constructor(props) {
        super(props); 
    }

    render() {
        return (
            <div>
            <span>EDITING:: </span>
                {this.props.txt}
            </div>
        )
    }
}