import React from 'react';
import TodoItem from './todo-item'

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <ol>
        {this.props.fullListArray.map((todoObj) =>
          <TodoItem
            key={todoObj._id}
            title={todoObj.title}
            description={todoObj.description}
            isCompleted={todoObj.isCompleted}
          />
        )}
      </ol>
    )
  }
}
