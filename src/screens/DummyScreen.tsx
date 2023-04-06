import React, {useEffect} from 'react';
import {BackHandler, Text, View} from 'react-native';
import {backAction} from '../assets/constants/backAction';

const DummyScreen = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00264D',
      }}>
      <Text style={{fontSize: 25, color: 'white'}}>Dummy Screen</Text>
    </View>
  );
};

export default DummyScreen;
