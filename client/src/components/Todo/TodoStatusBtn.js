/// Import Libraries
import React, { Component } from 'react'

export default class TodoStatusBtn extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>{this.props.status}</div>
        )
    }
}
