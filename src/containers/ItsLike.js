import React, { Component } from 'react';
import Thisthat from '../components/ThisThat';
import { getThisThat } from '../services/ThisThatAPI';

export default class ItsLike extends Component {
    state = {
    input: '',
      thisthat: '',
    }

    componentDidMount() {
      this.fetchThisThat();
    }

    componentWillUpdate(prevProps, prevState) {
        if(prevState.)
    }
}
