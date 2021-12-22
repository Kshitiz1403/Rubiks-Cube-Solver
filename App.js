import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import * as ImagePicker from 'expo-image-picker'

export default function App() {

  useEffect(async () => {
    const {status} = await ImagePicker.requestCameraPermissionsAsync()
    if (status!=='granted'){
      alert('Sorry, we need camera roll permissions to make this work!');
    }
  }, [])

  return (
    <RootNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
