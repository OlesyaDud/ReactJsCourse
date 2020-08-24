import React, {useState, useEffect }from 'react';
//  useEffect ----By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates
// Does useEffect run after every render? Yes! By default, it runs both after the first render and after every update.

import {Container, Row, Col} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Axios from "axios";

import MyCard from "../src/AxiosOne.js/MyCard";


const App = () => {

  // storing data here
  const [details, setDetails] = useState({});

// to use asynchroneous req==async and await
const fetchDetails = async () => {
  const {data} = await Axios.get("https://randomuser.me/api/");
  console.log("RESP:", data);

  const details = data.results[0];
  setDetails(details);
};

// how we call :   useEffect(() =>{}, [])
useEffect(() =>{
  fetchDetails()
}, []);

  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4">
          <MyCard details={details} />
        </Col>
      </Row>
    </Container>
     

  );
};

export default App;
