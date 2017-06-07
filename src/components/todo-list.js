import React from 'react';
import TodoItem from './todo-item'
import './styles.scss'
import CreateTodo from './create-todo'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

    toggleTodoForm () {
      const form = document.getElementsByClassName('create-form');
      const addButton = document.getElementsByClassName('add-button');
      const closeButton = document.getElementsByClassName('close-create');

      form[0].classList.toggle('hidden');
      addButton[0].classList.toggle('hidden');
      closeButton[0].classList.toggle('hidden');
      form[0].reset();
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
            toggleUpdateForm={this.props.toggleUpdateForm}
          />
        )}

        <li className="add-todo-block">
          <div onClick={this.toggleTodoForm} className="add-button">+</div>
          <CreateTodo
            createNewTodo = {this.props.createNewTodo}
          />
          <div onClick={this.toggleTodoForm} className="close-create close-button hidden">X</div>
        </li>
      </ol>
    )
  }
}
