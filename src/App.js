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
      apiKey: 'AIzaSyAh5Rpk3uwqxIsmlWzibQMpZCe6DK6eB5U',
      authDomain: 'chat-app-3ce09.firebaseapp.com',
      databaseURL: 'https://chat-app-3ce09.firebaseio.com',
      storageBucket: 'chat-app-3ce09.appspot.com',
      messagingSenderId: '144149829282'
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
