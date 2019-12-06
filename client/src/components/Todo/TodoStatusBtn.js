/// Import Libraries
import React, { Component } from 'react'

export default class TodoStatusBtn extends Component {
    render() {
        return (
            <div>{this.props.status}</div>
        )
    }
}
