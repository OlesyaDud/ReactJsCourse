// import React, {useState} from 'react';
// import './App.css';

// function Grandchild (props) {
//   return (
//     <div>
//       <h1>Hello from grandchild</h1>
//       {/* <p>Let's pass our value created in Parent into child {props.noICanPassValueToChild}</p> */}
//       <Child brandName ={props.brandName}/>
//     </div>
//   );
// };


// function Child(props) {
//   return (
//     <div>
//       <h1>Another hello from child</h1>
//       <p>Let's pass our value created in Parent into child {props.brandName}</p>
//     </div>
//   );
// };



// function App() {
//   const [brand] = useState("---Variable that I will display as a child component/coming from parent")
//   return (
//     <div>
//       <h1>hello</h1>
//       {/* commenting out because I want child to be rendered from Grandchild */}
//       {/* <Child brandName = {brand} /> */}
//       <Grandchild brandName={brand}/>
//     </div>
//   );
// };

// export default App;



//this file is about passing doesn props along the treebranches