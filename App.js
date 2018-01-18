import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './src/store'

import Home from './src/containers/Home'

export default class App extends Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
