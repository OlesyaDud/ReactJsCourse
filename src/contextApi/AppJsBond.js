import React, {Fragment} from 'react';
import './App.css';
import Provider from "./contextApi/provider";
import Context from "./contextApi/context";

const Agents = () => {
  return <AgentOne />
}

const AgentOne = () => {
  return <AgentTwo />
}

const AgentTwo = () => {
  return <AgentBond />
}

const AgentBond = () => {
  return <Context.Consumer>
    {
      (context) => (
        <Fragment>
          <h3>Agent info</h3>
          <p>Mission name: {context.data.mName}</p>
          <h2>Mission Status: {context.data.accepted}</h2>
          <button onClick={context.isAccepted}>Accept</button>
        </Fragment>
      )
    }
  </Context.Consumer>
}

function App() {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;