/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import calculator from './lib/calculator';

class AwesomeShit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 20.6579482,
        longitude: -103.3752976
      },
      currentPosition: 'unkwown',
      mtsAway: 0
    }
  }

  componentDidMount() {
    navigator.geolocation.watchPosition((position) => {
      var currentPosition = JSON.stringify(position);
      var mtsAway = calculator.getDistanceInMeters(this.state.initialPosition, position);
      this.setState({currentPosition});
      this.setState({mtsAway});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to This Shit!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.instructions}>Current: {this.state.currentPosition}</Text>
        <Text style={styles.instructions}>{this.state.mtsAway} mts away from starting point.</Text>
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

AppRegistry.registerComponent('AwesomeShit', () => AwesomeShit);
