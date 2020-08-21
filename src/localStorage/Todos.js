import React, {useState} from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import {FaCheckDouble} from "react-icons/fa";

const Todos = ({todos, markFinished}) => {

    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo =>(
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span
                    className="float-right"
                    onClick={()=> markFinished(todo.id)}
                    ><FaCheckDouble/></span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos;