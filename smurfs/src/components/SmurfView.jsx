import React from 'react';

import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import SmurfList from './SmurfList';

class SmurfView extends React.Component {

    componentDidMount(){
        // console.log(this.props)
        this.props.getSmurfs()
    }

    render(){
        // console.log(this.props)
        return (
            <div>
                {
                    this.props.fetchingSmurfs && (<span>Loading...</span> )
                }
                {this.props.error && (
                <span>{this.props.error}</span>
                )}      
                <div className="smurf-wrapper">
                    <SmurfList smurfs={this.props.smurfs} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => (
    // console.log(state),
    {
    smurfs: state.smurfs
})

export default connect(
    mapStateToProps,
    { getSmurfs }
)(SmurfView);