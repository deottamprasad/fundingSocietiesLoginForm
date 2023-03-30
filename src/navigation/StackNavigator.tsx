import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SelectCountryScreen from '../screens/SelectCountryScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import TabNavigator from './TabNavigator';

type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  RegisterScreen: undefined;
  ForgotPasswordScreen: undefined;
  ResetPasswordScreen: undefined;
  SelectCountryScreen: undefined;
  MyTab: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SelectCountryScreen"
      screenOptions={{
        animation: 'slide_from_right',
        headerStyle: {backgroundColor: '#000B18'},
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 17,
        },
        statusBarColor: '#000B18',
      }}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: true, headerBackVisible: false, title: 'Home'}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: true, title: 'Sign In'}}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: true, title: 'Register'}}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{headerShown: true, title: 'Forgot Password'}}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{headerShown: true, title: 'Reset Password'}}
      />
      <Stack.Screen
        name="SelectCountryScreen"
        component={SelectCountryScreen}
        options={{headerShown: true, title: ''}}
      />
      <Stack.Screen
        name="MyTab"
        component={TabNavigator}
        options={{
          headerShown: false,
          title: 'My Tab',
          statusBarColor: '#00264D',
        }}
      />
    </Stack.Navigator>
  );
};
export {type RootStackParamList};
export default StackNavigator;
