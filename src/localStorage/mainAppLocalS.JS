// import React, {useState, useEffect }from 'react';

// import {Container} from "reactstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';

// import Todos from "../src/localStorage/Todos";
// import TodoForm from "../src/localStorage/TodoForm";


// const App = () => {

//   const [todos, setTodos]=useState([])

//   useEffect(()=> {
//     const localTodos = localStorage.getItem("todos")

//     console.log({localStorage});
//     if(localTodos) {
//       setTodos(JSON.parse(localTodos))
//     }
//   }, [])

//   const addTodos = async todo => {
//     setTodos([...todos, todo])
//   }

//   useEffect(()=>{
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const markFinished = id => {
//     setTodos(todos.filter(todo => todo.id !== id))
//   };


//   return (
 
//     <Container>
//       <h1>Todo with Local Storage</h1>
//       <Todos todos={todos} markFinished={markFinished} />
//       {/* name of the method in a form */}
//       <TodoForm  addTodos={addTodos} />
//     </Container>
//   );
// };

// export default App;
