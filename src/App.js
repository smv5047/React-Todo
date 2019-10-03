import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todo: []
    }
  }


  addTodo = (event, todoName) => {
    event.preventDefault();

    const newTodo = {

      id: Date.now(),
      task: todoName,
      completed: false
    }

    this.setState({
      todo:[...this.state.todo, newTodo]
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
          <h2>ToDo Today</h2>
          <TodoForm addTodo={this.addTodo} />
          <TodoList todoArray={this.state.todo}/>

          {/* <button onClick={this.clearDone}>
            Done
          </button> */}
      </div>
    );
  }
}

export default App;
