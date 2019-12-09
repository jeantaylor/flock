/// Import Libraries
import React, { Component } from "react";

export default class AddTodo extends Component {
  render() {
    return (
      <form
        className='addTodo'
        onSubmit={this.props.createTodo}
      >
        <input
          className='addTodo__input'
          name="txt"
          placeholder="What to do?"
        />
      </form>
    );
  }
}
