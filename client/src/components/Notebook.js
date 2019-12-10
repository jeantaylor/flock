/// Import Libraries
import React, { Component } from 'react';

/// Import Components
import AddTodo from './Todo/AddTodo';
import TodoCard from './Todo/TodoCard';
import Pomo from './Pomodoro/PomoTimer';

export default class Notebook extends Component {
  state = {
    haus: 'RESTAURANT'
  }

  render() {
    return (
      <div className='notebook'>
        <div className='notebook__overlay'>
    <div className='notebook__context'>--- {this.state.haus} ---</div>
          <AddTodo createTodo={this.props.createTodo} />
          <TodoCard
            todos={this.props.todos}
            updateTxt={this.props.updateTxt}
            updateStatus={this.props.updateStatus}
            deleteTodo={this.props.deleteTodo}
          />
          {
            this.props.showTimer
            &&
            <Pomo
              preferences={this.props.preferences}
              pomoToggleOff={this.props.pomoToggleOff}
            />
          }
        </div>
      </div>
    );
  }
}
