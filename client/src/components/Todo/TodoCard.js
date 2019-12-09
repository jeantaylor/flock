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
        <article
          key={todo._id}
          id={todo._id}
          className='todoCard'
        >
          <div className='todoCard__innerWrapper'>
            <StatusBtn
              id={todo._id}
              status={todo.status}
              updateStatus={updateStatus}
            />
            <form className='todoCard__txtForm' id={todo._id} onSubmit={updateTxt}>
              <input className='todoCard__txtInput' name="txt" placeholder={todo.txt} />
            </form>
            <Kbab id={todo._id} deleteTodo={deleteTodo} />
          </div>
        </article>
      );
    });

    return <section className='todoCards'>{newCards}</section>;
  }
}
