/// Imports
import React, { Component } from 'react'

export default class TodoView extends Component {
    render() {
        return (
            <div>
            <span>VIEWING:: </span>
                {this.props.txt}
            </div>
        )
    }
}
