import React from "react";

import "./Todo.css"

const Todo = props =>{
    return (
        <div className="todoList" onClick={props.onClick}>
            <div className="todoBlock">
                <p className="todo">{props.todo.task}</p>
            </div>
        </div>
    )
}

export default Todo