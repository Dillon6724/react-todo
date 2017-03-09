import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form method="POST" action="http://localhost:3000/todos">
        <input type="text" name="title" placeholder="title" />
        <br/>
        <input type="text" name="description" placeholder="description" />
        <br/>
        <input type="submit" value="Submit" />
        <br/>
      </form>
    )
  }
}
