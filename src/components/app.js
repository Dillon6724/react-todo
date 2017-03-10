import React from 'react';
import $ from 'jquery'
import TodoList from './todo-list.js'
import Loading from './loading.js'
import CreateTodo from './create-todo.js'
import { render } from 'react-dom'
import './styles.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: false,
      todoList: []
    }
    this.createNewTodo = this.createNewTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)

  }

  componentDidMount() {
    this.getTodos(true)
  }

  getTodos(shouldLoad = false) {
    if (shouldLoad) {this.setState({fetching:true})}
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/todos',
      success:((data) => {
        this.setState({todoList: data, fetching: false})
      })
    })
  }

  createNewTodo(newTodoObj) {
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

  deleteTodo(key) {
    $.ajax({
      method: 'DELETE',
      url: 'http://localhost:3000/todo/delete/' + key,
      success:((data) => {
        this.getTodos();
      }).bind(this)
    })
  }

  updateTodo(key, updatedData) {
    $.ajax({
      method: 'PUT',
      url: 'http://localhost:3000/todo/update/' + key,
      data: updatedData,
      success:((data) => {
        this.getTodos();
      }).bind(this)
    })
  }

  render() {
    return (
      <div>
        <h1 className="app-title">ToDon't </h1>
        { this.state.fetching ?
          <Loading/>
        :
          <TodoList
            fullListArray = {this.state.todoList}
            deleteTodo = {this.deleteTodo}
            updateTodo={this.updateTodo}
            createNewTodo={this.createNewTodo}
          />
        }
      </div>
    )
  }
}
