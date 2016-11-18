import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCHZmgpmqyH2LGIIKUSfuxboOMj2Zf0avc',
      authDomain: 'manager-520d6.firebaseapp.com',
      databaseURL: 'https://manager-520d6.firebaseio.com',
      storageBucket: 'manager-520d6.appspot.com',
      messagingSenderId: '1085524159564'
  };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
