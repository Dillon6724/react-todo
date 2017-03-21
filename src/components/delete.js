import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    console.log(this.delete)
    this.props.deleteTodo(this.delete.value)
  }

  render() {
    console.log(this.props.id)
    return (
      <button className="close-button delete-button" onClick={this.handleDelete} ref={(input) => { this.delete = input; }} value={this.props.id}>DONE</button>
    )
  }
}
