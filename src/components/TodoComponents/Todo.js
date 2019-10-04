import React from "react";

import "./Todo.css"

const Todo = props =>{
    return (
        <div className="todoList" >
            <div 
            className={`todo${props.todo.completed ? "completed" : ""}`}
            onClick={props.onClick}
                >
                <p className="todo">{props.todo.task}</p>
            </div>
        </div>
    )
}

export default Todo