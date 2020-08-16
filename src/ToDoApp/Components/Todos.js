import React ,  {useContext} from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import {FaCheckDouble} from "react-icons/fa";
import {TodoContext} from "../Context/TodoContext";
import {REMOVE_TODO} from "../Context/actionTypes";

const Todos =()=> {
    const {todos, dispatch} = useContext(TodoContext);

    return (
        <ListGroup className="mt-5 mb-2 items">

            {todos.map(t => (
                <ListGroupItem key={t.id}>
                    {t.todoString}

                    <span className="float-right"
                    onClick={()=> {
                        dispatch({
                            type: REMOVE_TODO,
                            payload: t.id
                        })
                    }}
                    ><FaCheckDouble />
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )

}

export default Todos;