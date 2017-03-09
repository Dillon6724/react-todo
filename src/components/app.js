import React from 'react';
import $ from 'jquery'
import TodoList from './todo-list.js'
import Loading from './loading.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetching: true,
      todoList: []
    }
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

  render() {
    console.log("***** STATE: ", this.state);
    return (
      <div>
        <h1>Todo List!</h1>
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
