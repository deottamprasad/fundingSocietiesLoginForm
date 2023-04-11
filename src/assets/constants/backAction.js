import {Alert, BackHandler} from 'react-native';
import React from 'react';

export const backAction = () => {
  Alert.alert('Exit App', 'Exiting the application?', [
    {
      text: 'Cancel',
      onPress: () => null,
      style: 'cancel',
    },
    {
      text: 'YES',
      onPress: () => {
        BackHandler.exitApp();
      },
    },
  ]);
  return true;
};
