import React from "react";

const Todo = props =>{
    return (
        <div
        onClick={props.onClick}
        >
            <p>{props.item.name}</p>
        </div>
    )
}

export default Todo