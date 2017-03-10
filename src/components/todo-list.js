import React from 'react';
import TodoItem from './todo-item'
import './styles.scss'
import CreateTodo from './create-todo'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


    showAddTodoForm () {
    const form = document.getElementsByClassName('form-hidden')
    const addTodoBlock = document.getElementsByClassName('add-todo-block')
    console.log(form)
    form[0].style.display = "inline-block"
    addTodoBlock[0].innerHTML = ""
    }

  render() {
    return (
      <ol>
        {this.props.fullListArray.map((todoObj) =>
          <TodoItem
            key={todoObj._id}
            id = {todoObj._id}
            title={todoObj.title}
            description={todoObj.description}
            isCompleted={todoObj.isCompleted}
            deleteTodo={this.props.deleteTodo}
            updateTodo={this.props.updateTodo}
          />
        )}

        <li onClick= {this.showAddTodoForm} className="add-todo-block">+
          <CreateTodo
            createNewTodo = {this.props.createNewTodo}
          />
        </li>
      </ol>
    )
  }
}
