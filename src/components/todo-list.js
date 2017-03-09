import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log("PROPS IN TODOLIST COMPONENT: ", this.props.fullListArray);
    return (
      <div>
        <h1>{this.props.fullListArray}</h1>
      </div>
    )
  }
}
