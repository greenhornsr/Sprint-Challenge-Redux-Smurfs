import React from 'react';
import { connect } from 'react-redux';
import { addMySmurf } from '../actions';

import './App.css';
import SmurfView from './SmurfView';



class App extends React.Component{
    state = {
        name: '',
        age: '',
        height: '',
    }

    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name] : event.target.value
        })
    }

    addMySmurf = (event) => {
        // event.preventDefault();
        // console.log(this.state)
        this.props.addMySmurf(this.state)
        this.setState({
            name: '',
            age: '',
            height: '',
        })
    }

    render(){
        // console.log(this.state)
        return (
            <div className="App">
              <h1>My Redux Smurfs</h1>
              <form onSubmit={this.addMySmurf} >
                  <label htmlFor="name">Smurf's name: </label>
                  <input onChange={this.handleChange} name="name" value={this.props.name} type="text" placeholder="Gimme a name!" />
                  <label htmlFor="age">Smurf's age: </label>
                  <input onChange={this.handleChange} name="age" value={this.props.age} type="text" placeholder="How young am I?" />
                  <label htmlFor="height">Smurf's height: </label>
                  <input onChange={this.handleChange} name="height" value={this.props.height} type="text" placeholder="How tall am I?" />
                  <button onClick={this.addMySmurf} >Add Me</button>
              </form>
              <SmurfView />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

export default connect(
  mapStateToProps,
    { addMySmurf }
)(App)

