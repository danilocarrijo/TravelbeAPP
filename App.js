import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import promise from 'redux-promise';
import { fetchPost } from './actions';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { connect } from 'react-redux';
import _ from 'lodash';
import PostIndex from './components/post_index'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          <PostIndex />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
