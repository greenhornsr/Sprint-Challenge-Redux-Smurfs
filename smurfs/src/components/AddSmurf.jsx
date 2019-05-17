import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';


class AddSmurf extends React.Component{
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

    addSmurf = (event) => {
        console.log(this.state)
        event.preventDefault();
        this.props.addSmurf(this.state)
        this.setState({
            name: '',
            age: '',
            height: '',
        })
    }

    render(){
        // console.log(this.state)
        return (
            <div>
                <form onSubmit={this.addSmurf} >
                    <label htmlFor="name">Smurf's name: </label>
                    <input onChange={this.handleChange} name="name" value={this.props.name} type="text" placeholder="Gimme a name!" />
                    <label htmlFor="age">Smurf's age: </label>
                    <input onChange={this.handleChange} name="age" value={this.props.age} type="text" placeholder="How young am I?" />
                    <label htmlFor="height">Smurf's height: </label>
                    <input onChange={this.handleChange} name="height" value={this.props.height} type="text" placeholder="How tall am I?" />
                    <button onClick={this.addSmurf} >Add Me</button>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = state => ({
//     ...state
// })

export default connect(
    null,
    { addSmurf }
)(AddSmurf)
