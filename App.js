

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      latitude: 0.0,
      longitude: 0.0,
      error: null,
    };
  }

  render() {
    var success = true;
    const options = {};
    navigator.geolocation.getCurrentPosition(
      (position) => {
        options.location = position;
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
        console.log(position.coords.latitude);
      },
      (error) => this.setState({ error: error.message }));

    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Latitude: {this.state.latitude}
          </Text>
          <Text style={styles.welcome}>
            Longitude: {this.state.longitude}
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
