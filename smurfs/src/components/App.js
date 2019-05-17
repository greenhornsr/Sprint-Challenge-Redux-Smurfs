import React, { Component } from 'react';
import './App.css';
import SmurfView from './SmurfView';
import AddSmurf from './AddSmurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Redux Smurfs</h1>
        <div>
          <AddSmurf />
          <SmurfView />
        </div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default App;
