import React from 'react';
import $ from 'jquery'
import TodoList from './todo-list.js'
import Loading from './loading.js'
import CreateTodo from './create-todo.js'
import { render } from 'react-dom'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
      todoList: []
    }
    this.createNewTodo = this.createNewTodo.bind(this)
  }

  componentDidMount() {
    this.getTodos()
  }

  getTodos() {
    this.setState({fetching:true})
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/todos',
      success:((data) => {
        this.setState({todoList: data, fetching: false})
      })
    })
  }

  createNewTodo(newTodoObj) {
    this.setState({fetching:true})
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/todos',
      data: newTodoObj,
      success:((data) => {
        this.getTodos();
      }).bind(this),
      error:((err) => {
      }).bind(this)
    })
  }

  render() {
    console.log("                                         STATE: ", this.state);
    return (
      <div>
        <h1>Todo List!</h1>
        <CreateTodo
          createNewTodo = {this.createNewTodo}
        />
        <hr/>
        { this.state.fetching ?
          <Loading/>
        :
          <TodoList
            fullListArray = {this.state.todoList}
          />
        }
      </div>
    )
  }
}
