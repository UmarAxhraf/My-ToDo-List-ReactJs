import React from "react";
import './index.css';

const ToDoList = (props) => {

    return (
        <>
            <div className="todo_stylee" style={{alignItems:"center"}}>
                <li class="fa fa-times" aria-hidden='true' 
                onClick={() => {
                    props.onSelect(props.id)}} />
                <li> {props.text} </li>
            </div>
        </>
    )
};

export default ToDoList;