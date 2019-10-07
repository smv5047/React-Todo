import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      todo: []
    };
  }


  addTodo = (event, todoName) => {
    event.preventDefault();

    const newTodo = {

      id: Date.now(),
      task: todoName,
      completed: false
    };

    this.setState({
      todo:[...this.state.todo, newTodo]
    })
  }

  toggleTodo = (event, id) => {
    event.preventDefault()
    
    this.setState({
      // loop over each item in array and alter it
      // if it matches the passed itemId
      todo: this.state.todo.map((todo) => {
        if (todo.id === id) {
          return {
            // merge existing item with new values below
            ...todo,
            // "toggle" the boolean value or set it to
            // opposite what it currently is
            completed: !todo.completed
          }
        } else {
          return todo
        }
      })
    })
  }

  clearDone = () =>{
    this.setState({
      todo: this.state.todo.filter((todo)=>{
        if(todo.completed === false) {
          return todo
        } else {
          return null
        }
      })
    })
  }


  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="app">
          <h2>ToDo Today</h2>
          <TodoForm addTodo={this.addTodo} />
          <TodoList todo={this.state.todo} toggleTodo={this.toggleTodo}/>
          <button onClick={this.clearDone}>
            Clear
          </button>
      </div>
    );
  }
}

export default App;
