import React from 'react';
import Delete from './delete'
import Update from './update'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <li>{this.props.title}
          <ul><li>{this.props.description}</li></ul>
          <Delete
            id ={this.props.id}
            deleteTodo = {this.props.deleteTodo}
          />
          <Update
            id={this.props.id}
            updateTodo={this.props.updateTodo}
          />
        </li>
      </div>
    )
  }
}
