/// Import Libraries
import React, { Component } from "react";

/// Import Components
import StatusBtn from "./TodoStatusBtn";
import Kbab from "./TodoKbab";

export default class TodoCard extends Component {
  render() {
    const updateTxt = this.props.updateTxt;
    const updateStatus = this.props.updateStatus;
    const deleteTodo = this.props.deleteTodo;

    let newCards = this.props.todos.map(todo => {
      return (
        <article key={todo._id} id={todo._id}>
          <StatusBtn
            id={todo._id}
            status={todo.status}
            updateStatus={updateStatus}
          />
          <form id={todo._id} onSubmit={updateTxt}>
            <input name="txt" placeholder={todo.txt} />
            <button type="submit">save</button>
          </form>
          <Kbab id={todo._id} deleteTodo={deleteTodo} />
        </article>
      );
    });

    return <section>{newCards}</section>;
  }
}
