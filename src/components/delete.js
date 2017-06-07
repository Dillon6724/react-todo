import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    this.props.deleteTodo(this.delete.value)
  }

  render() {
    return (
      <button className="close-button delete-button" onClick={this.handleDelete} ref={(input) => { this.delete = input; }} value={this.props.id}>DONE</button>
    )
  }
}
