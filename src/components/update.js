import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate() {
    const updatedTodoObj = {
      title: this.updateTitle.value,
      description: this.updateDescription.value,
      isCompleted: false
    }
    this.props.updateTodo(this.id.value, updatedTodoObj)
  }

  render() {
    return (
      <div>
        <input type="text" ref={(input) => { this.updateTitle = input; }} placeholder="update title" />
        <input type="text" ref={(input) => { this.updateDescription = input; }} placeholder="update description" />
        <button onClick={this.handleUpdate} ref={(input) => { this.id = input; }} value={this.props.id}>update</button>
      </div>
    )
  }
}
