import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import SvgLogoImg from '../assets/images/logo.svg';
import {RootStackParamList} from '../navigation/StackNavigator';
import BlueButton from '../components/BlueButton';
import {styles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen = ({navigation, route}: PropsType) => {
  const handleGetStartedPress = () => {
    navigation.navigate('OnboardingScreen');
  };
  const handleSignInPress = () => {
    navigation.navigate('SelectCountryScreen', {isRegister: false});
  };

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
      style={styles.WelcomeScreen.lgContainer}>
      <View style={styles.WelcomeScreen.container}>
        <SvgLogoImg height={50} width={100} />
        <View style={styles.WelcomeScreen.welcomeTextView}>
          <Text style={styles.WelcomeScreen.welcomeText}>
            Welcome, Investor!
          </Text>
        </View>
        <View style={styles.WelcomeScreen.welcomeTextDescView}>
          <Text style={styles.WelcomeScreen.welcomeTextDesc}>
            Welcome to the Funding Societies |
          </Text>
          <Text style={styles.WelcomeScreen.welcomeTextDesc}>
            Modaiku platform. Great to see you here!
          </Text>
        </View>
        <BlueButton onPress={handleGetStartedPress}>Get Started</BlueButton>
        <TouchableOpacity
          style={styles.WelcomeScreen.signInView}
          onPress={handleSignInPress}>
          <Text style={styles.WelcomeScreen.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;
