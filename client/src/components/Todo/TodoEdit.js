/// Imports
import React, { Component } from 'react'

export default class TodoEdit extends Component {
    render() {
        return (
            <div>
            <span>EDITING:: </span>
                {this.props.txt}
            </div>
        )
    }
}