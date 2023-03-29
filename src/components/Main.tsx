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
import WelcomeScreen from '../screens/WelcomeScreen';

type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  RegisterScreen: undefined;
  ForgotPasswordScreen: undefined;
  ResetPasswordScreen: undefined;
  SelectCountryScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          statusBarColor: '#000B18',
        }}
        initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: 'Home',
            headerShown: true,
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
            headerShown: true,
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
            headerShown: true,
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
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerTitle: 'Register',
            headerShown: true,
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
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            headerTitle: 'Forgot Password',
            headerShown: true,
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
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{
            headerTitle: 'Reset Password',
            headerShown: true,
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
          name="SelectCountryScreen"
          component={SelectCountryScreen}
          options={{
            headerTitle: ' ',
            headerShown: true,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export {type RootStackParamList};
export default Main;
