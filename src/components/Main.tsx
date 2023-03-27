import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  RegisterScreen: undefined;
  ForgotPasswordScreen: undefined;
  ResetPasswordScreen: undefined;
};

// import Icon from 'react-native-vector-icons/AntDesign';
// import {styles} from '../styles/ComponentStyle';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={{
          animation: 'slide_from_right',
          headerStyle: {backgroundColor: '#000B18'},
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 17,
          },
        }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: true, title: 'Sign In'}}
          // options={({navigation, route}) => ({
          //   headerShown: true,
          //   title: 'Sign In',
          //   headerLeft: () => (
          //     <Icon
          //       name="arrowleft"
          //       size={17}
          //       color="white"
          //       style={styles.HeaderBar.leftArrowIcon}
          //     />
          //   ),
          // })}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export {type RootStackParamList};
export default Main;
