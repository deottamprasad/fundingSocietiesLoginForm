import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBarIcon from '../components/TabBarIcon';
import DummyScreen from '../screens/DummyScreen';
import FundsScreen from '../screens/FundsScreen';
import SettingScreen from '../screens/SettingScreen';

type RootTabParamList = {
  DummyScreen1: undefined;
  DummyScreen2: undefined;
  DummyScreen3: undefined;
  FundsScreen: undefined;
  SettingScreen: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="DummyScreen1"
      screenOptions={({route}) => ({
        headerStyle: {backgroundColor: '#00264D'},
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerTitleStyle: {fontSize: 15},
        tabBarIcon: ({focused}) => {
          return TabBarIcon({focused, route});
        },
        tabBarStyle: {
          backgroundColor: '#00264D',
          height: '12%',
          borderTopWidth: 0.5,
          borderColor: 'white',
        },
        tabBarItemStyle: {paddingBottom: '4%'},
        tabBarShowLabel: false,
      })}>
      <Tab.Screen
        name="DummyScreen1"
        component={DummyScreen}
        options={{title: 'Dummy1'}}
      />
      <Tab.Screen
        name="DummyScreen2"
        component={DummyScreen}
        options={{title: 'Dummy2'}}
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
        options={{title: 'Setting'}}
      />
    </Tab.Navigator>
  );
};

export {type RootTabParamList};
export default TabNavigator;
