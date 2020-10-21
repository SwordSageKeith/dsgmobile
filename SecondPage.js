//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text, Dimensions} from 'react-native';
//import all the components we are going to use.

const { width, height } = Dimensions.get("window");

export default class SecondPage extends Component {
  static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Deals and such</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});