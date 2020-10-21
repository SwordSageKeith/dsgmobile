//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Button, Dimensions, Image, Text} from 'react-native';
//import all the components we are going to use.

const { width, height } = Dimensions.get("window");


export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'First Page',
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
       <Text style={styles.body}>Profile</Text>
       <Image source={{
          uri: 'https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg',
        }} style = {styles.image}></Image>
       <Text style={styles.body}>Something</Text>
       <Text style={styles.body}>Something</Text>
       <Text style={styles.body}>Something</Text>
       <Text style={styles.body}>Something</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#fff',
    alignItems: 'left',
    padding: 10,
  },
  body:{
      padding: 20,
      fontSize:30
  },
  image: {
      width: 100,
      height: 100,
  }
});