import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StackNavigator from '../navigation/StackNavigator';

const Main = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Main;
