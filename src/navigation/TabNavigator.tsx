import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import DummyScreen from '../screens/DummyScreen';
import FundsScreen from '../screens/FundsScreen';
import SettingScreen from '../screens/SettingScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

type RootTabParamList = {
  DummyScreen1: undefined;
  DummyScreen2: undefined;
  DummyScreen3: undefined;
  FundsScreen: undefined;
  SettingScreen: undefined;
  PortfolioScreen: undefined;
};
// type RootStackParamList = {
//   ReferScreen: undefined;
// };

const Tab = createBottomTabNavigator<RootTabParamList>();
// const Stack = createNativeStackNavigator<RootStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="DummyScreen1"
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: '#00264D'},
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle: {fontSize: 15},
        tabBarIcon: ({focused}) => {
          return TabBarIcon({focused, route});
        },
        tabBarStyle: {
          backgroundColor: '#00264D',
          height: '9%',
          borderTopWidth: 0.3,

          // margin: '0%',
          // borderColor: 'rgba(255,255,255,0.2)',
        },
        tabBarItemStyle: {paddingBottom: '2.5%'},
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="DummyScreen1"
        component={DummyScreen}
        options={{title: 'Dummy1'}}
      />
      <Tab.Screen
        name="PortfolioScreen"
        component={PortfolioScreen}
        options={{title: 'Portfolio'}}
      />
      <Tab.Screen
        name="DummyScreen3"
        component={DummyScreen}
        options={{title: 'Dummy3'}}
      />
      <Tab.Screen
        name="FundsScreen"
        component={FundsScreen}
        options={{title: 'Funds'}}
      />
      <Tab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{title: 'Settings'}}
      />
    </Tab.Navigator>
  );
};

export {type RootTabParamList};
export default TabNavigator;
