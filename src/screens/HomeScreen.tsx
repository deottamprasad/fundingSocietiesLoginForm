import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SvgLogoImg from '../assets/images/logo.svg';
import HeaderBar from '../components/HeaderBar';
import {RootStackParamList} from '../components/Main';
import {screenStyles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen = ({navigation, route}: PropsType) => {
  const handleLogoutPress = () => {
    navigation.navigate('WelcomeScreen');
  };
  useEffect(() => {
    StatusBar.setHidden(true);
  });
  return (
    <LinearGradient
      colors={[
        '#000B18',
        '#00172D',
        '#00264D',
        '#02386E',
        '#00498D',
        '#0052A2',
      ]}
      style={screenStyles.HomeScreen.lgContainer}>
      <View style={screenStyles.HomeScreen.container}>
        <View style={screenStyles.HomeScreen.titleView}>
          <SvgLogoImg height={40} width={40} />
          <View style={screenStyles.HomeScreen.fsTitleView}>
            <Text style={screenStyles.HomeScreen.fundingText}>funding</Text>
            <Text style={screenStyles.HomeScreen.societiesText}>societies</Text>
          </View>
        </View>
        <Text style={screenStyles.HomeScreen.homeText}>Home Page</Text>
        <TouchableOpacity
          style={screenStyles.HomeScreen.accountView}
          onPress={handleLogoutPress}>
          <Text style={screenStyles.HomeScreen.accountText}>logout</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
