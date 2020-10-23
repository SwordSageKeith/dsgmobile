//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button, Dimensions, Image, Text} from 'react-native';
//import all the components we are going to use.

const { width, height } = Dimensions.get("window");
import store from './store.png';


export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'Third Page',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };

  render() {
    return (
      <View style={styles.container}>
          <Image source={store} style={styles.width} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    padding: 10,
  },
  body:{
      padding: 20,
      fontSize:30
  },
  image: {
      width: 100,
      height: 100,
  },
  width:{
      width:width
  }
});