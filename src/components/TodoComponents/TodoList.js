// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      todo: props.todoArray
    };
  }

  render() {
    return (
      <>
        {console.log(this.props.todoArray)}
        {this.props.todoArray.map(todo => (
          <Todo key={todo.id} todo={todo} />
          
        ))}
      </>
    );
  }
}

export default TodoList;