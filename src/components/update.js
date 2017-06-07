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
        <input type="text" defaultValue={this.props.title} ref={(input) => { this.updateTitle = input; }} className="form-block" placeholder="update title" />
        <input type="text" defaultValue={this.props.description} ref={(input) => { this.updateDescription = input; }} className="form-block" placeholder="update description" />
        <button onClick={this.handleUpdate} ref={(input) => { this.id = input; }} value={this.props.id} className="form-block" >update</button>
      </div>
    )
  }
}
