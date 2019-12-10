/// Import Libraries
import React, { Component } from "react";

export default class TodoStatusBtn extends Component {
  render() {
    const updateStatus = this.props.updateStatus;
    return (
      <select
        className='todoCard__status'
        id={this.props.id}
        defaultValue={this.props.status}
        onChange={updateStatus}
      >
        <option value="to-do">To-Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
    );
  }
}
