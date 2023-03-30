import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar} from 'react-native';

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SelectCountryScreen from '../screens/SelectCountryScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  RegisterScreen: undefined;
  ForgotPasswordScreen: undefined;
  ResetPasswordScreen: undefined;
  SelectCountryScreen: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          statusBarColor: '#000B18',
          headerStyle: {
            backgroundColor: '#000B18',
          },
          headerTitleStyle: {fontSize: 17},
          headerTintColor: '#e8e8e8',
          headerTitleAlign: 'center',
          headerShown: true,
        }}
        initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: 'Home',
            headerStyle: {
              backgroundColor: '#000B18',
            },
            headerTitleStyle: {
              fontSize: 17,
            },
            headerTintColor: '#e8e8e8',
            headerTitleAlign: 'center',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerTitle: 'Sign In',
            headerStyle: {
              backgroundColor: '#000B18',
            },
            headerTitleStyle: {
              fontSize: 17,
            },
            headerTintColor: '#e8e8e8',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerTitle: 'Welcome',
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerTitle: 'Register',
          }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            headerTitle: 'Forgot Password',
          }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerTitle: 'Settings',
          }}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{
            headerTitle: 'Reset Password',
          }}
        />
        <Stack.Screen
          name="SelectCountryScreen"
          component={SelectCountryScreen}
          options={{
            headerTitle: ' ',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export {type RootStackParamList};
export default Main;
