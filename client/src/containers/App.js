/// Import Libraries
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

/// Import Components
import Dock from "../components/Dock";
import Notebook from "../components/Notebook";
import ControlPanel from "../components/ControlPanel";
import Axios from "axios";

/// Const Variables
const currentHaus = "restaurant";
const currentUserId = "5de334179e70eb23286d8b3e";
const userUrl = `http://localhost:8080/user/${currentUserId}`;
const todosUrl = `http://localhost:8080/todos/${currentUserId}/${currentHaus}`;
const patchTxtUrl = `http://localhost:8080/todos/edit/${currentUserId}/${currentHaus}/`;
const patchStatusUrl = `http://localhost:8080/todos/dstatus/${currentUserId}/${currentHaus}/`;
const deleteTodoUrl = `http://localhost:8080/todos/${currentUserId}/${currentHaus}/`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      userData: {},
      showTimer: false
    };
  };

  componentDidMount() {
    Axios.get(userUrl).then(res => {
      this.setState({ userData: res.data, loading: false });
    });
  };

  /// CRUD Functions: Todos 
  createTodo = event => {
    event.preventDefault();
    Axios({
      method: "post",
      url: todosUrl,
      data: { txt: event.target.txt.value }
    }).then(res => {
      const newTodos = this.state.userData.todos;
      newTodos.push(res.data);

      this.setState(prevState => ({
        userData: {
          ...prevState.userData,
          todos: newTodos
        }
      }));
    });
    event.target.reset();
  };

  updateTxt = event => {
    event.preventDefault();
    Axios({
      method: "patch",
      url: patchTxtUrl + event.target.id,
      data: { txt: event.target.txt.value }
    }).then(res => {
      this.setState(prevState => ({
        userData: res.data
      }));
    });
    event.target.reset();
  };

  updateStatus = event => {
    event.preventDefault();
    Axios({
      method: "patch",
      url: patchStatusUrl + event.target.id,
      data: { status: event.target.value }
    }).then(res => {
      this.setState(prevState => ({
        userData: res.data
      }));
    });

    if (event.target.value === 'doing') {
      this.setState({ showTimer: true })
    }
  };

  deleteTodo = event => {
    event.preventDefault();
    Axios({
      method: "delete",
      url: deleteTodoUrl + event.target.id
    }).then(res => {
      this.setState(prevState => ({
        userData: res.data
      }));
    });
  };

  /// Pomo Functions 
  pomoToggleOff = () => {
    this.setState({ showTimer: false })
  }

  render() {
    if (this.state.loading) {
      return <div>Empty</div>;
    } else {
      return (
        <div className="app">
          <Switch>
            <Route path="/" exact>
              <Dock />
            </Route>
            <Route
              path="/todos/:user"
              render={props => (
                <Notebook
                  todos={this.state.userData.todos}
                  preferences={this.state.userData.preferences}
                  showTimer={this.state.showTimer}
                  createTodo={this.createTodo}
                  updateTxt={this.updateTxt}
                  updateStatus={this.updateStatus}
                  deleteTodo={this.deleteTodo}
                  pomoToggleOff={this.pomoToggleOff}
                  {...props}
                />
              )}
            />
            <Route path="/settings/:user" component={ControlPanel} />
          </Switch>
        </div>
      );
    }
  }
}
