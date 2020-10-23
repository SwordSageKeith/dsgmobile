import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, TextInput, View, Text, StatusBar, Image, Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { useState, useEffect } from 'react';
import { Camera  } from 'expo-camera';
//import {Permissions} from 'expo';
import * as Permissions from 'expo-permissions';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

class CameraScreen extends Component {

    state = {
        hasCameraPermission: null,
    };

    async componentDidMount() {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const audio = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
        const hasCameraPermission = (camera.status === 'granted' && audio.status === 'granted');

        this.setState({ hasCameraPermission });
    };

    render() {
        const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <View>
                <Camera
                    style={cam_styles.preview}
                    ref={camera => this.camera = camera}
                />
            </View>
        );
    }

    takePicture() {
        const options = {};
        this.camera.capture({ metadata: options })
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }
}

const cam_styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#000',
        padding: 10,
        margin: 40
    },
    preview: {
        height: winHeight,
        width: winWidth,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
});

export default CameraScreen;