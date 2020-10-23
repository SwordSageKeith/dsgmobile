//This is an example code for Navigator// 
import React, { Component, PureComponent } from 'react';
//import react in our code. 
import { StyleSheet, View, Text, Dimensions } from 'react-native';
//import all the components we are going to use.

import CameraTest from './CameraTest';

import Camera from 'expo';

const { width, height } = Dimensions.get("window");

export default class SecondPage extends PureComponent {
  static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
  };
  render() {
    return (
      <View style={styles.container}>
        <CameraTest />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});