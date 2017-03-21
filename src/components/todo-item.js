import React from 'react';
import Delete from './delete'
import Update from './update'
import './styles.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="list-container">
        <li className="todo-item">
          <span className="delete-button edit-button">EDIT</span>
          <Delete
            id ={this.props.id}
            deleteTodo = {this.props.deleteTodo}
          />
          <h1 className="todo-title">{this.props.title}</h1>
          <ul><li className="description">{this.props.description}</li></ul>
          <Update
            id={this.props.id}
            updateTodo={this.props.updateTodo}
            title={this.props.title}
            description={this.props.description}
          />
        </li>
      </div>
    )
  }
}
