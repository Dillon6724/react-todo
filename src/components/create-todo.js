import React from 'react';

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

  handleChange () {
    console.log('changing')
  }

  render() {
    return (
      <form className="create-form hidden">
        <h3 className="add-todo-title"> Add a New ToDon't </h3>
        <input type="text" defaultValue="" ref={(input) => { this.title = input; }} className="form-block" placeholder="title" />
        <input type="text" ref={(input) => { this.description = input; }} className="form-block" placeholder="description" />
        <button type="button" onClick={this.handleSubmit} className="form-block" >Submit</button>
      </form>
    )
  }
}
