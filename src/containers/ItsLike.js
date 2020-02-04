import React, { Component } from 'react';
import Form from '../components/Form';
import ThisThat from '../components/ThisThat';
import { getThisThat } from '../services/ThisThatAPI';

export default class ItsLike extends Component {
    state = {
      // showResult: false,
      output: {},
    }

    fetchThisThat = () => {
      return getThisThat()
        .then(output => this.setState({ output }));
    };



    // toggleResult = () =>
    //   this.setState(state => ({ ...state, showResult: !state.showResult }));

    handleSubmit = event => {
      event.preventDefault();
      // this.toggleResult();
      this.fetchThisThat();
    }

    render() {
      // const { showResult } = this.state;
      return (
        <>
          <Form
            onSubmit={this.handleSubmit}/>
          <ThisThat 
            object={this.state.output}/>
        </>
      );
    
    }
}
