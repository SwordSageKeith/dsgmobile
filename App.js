import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { PanGestureHandler, ScrollView, State } from "react-native-gesture-handler";

import FirstPage from './FirstPage'
import SecondPage from './SecondPage'

const { width, height } = Dimensions.get("window");

/*export default*/ function App() {
  return (
    <View style={styles.container}>
    </View>
  );
}


const Swiper = () => {
  return (<View style={styles.container}>
      <ScrollView snapToInterval ={width} decelerationRate="fast" horizontal pagingEnabled="true">
        <FirstPage style = {styles.picture}/>
        <SecondPage style = {styles.picture}/>
      </ScrollView>
  </View>)
}

export default Swiper;


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
  },
  picture: {
    width: width,
    height,
    overflow: "hidden",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
