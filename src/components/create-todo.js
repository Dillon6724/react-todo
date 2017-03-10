import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    const newTodoObj = {
      title: this.title.value,
      description: this.description.value,
      isCompleted: false
    }
    this.props.createNewTodo(newTodoObj);
  }


  render() {
    return (
      <form>
        <input type="text" ref={(input) => { this.title = input; }} placeholder="title" />
        <br/>
        <input type="text" ref={(input) => { this.description = input; }} placeholder="description" />
        <br/>
        <button type="button" onClick={this.handleSubmit}>Submit</button>
        <br/>
      </form>
    )
  }
}
