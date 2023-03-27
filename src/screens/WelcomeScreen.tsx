import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// import {SvgUri} from 'react-native-svg';
import SvgLogoImg from '../assets/images/logo.svg';
import {RootStackParamList} from '../components/Main';
import BlueButton from '../components/BlueButton';
import {screenStyles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>;

const WelcomeScreen = ({navigation, route}: PropsType) => {
  //   const imageUrl =
  //     'https://fundingsocieties.com/static/d3851783fa60bb00b8105677df77307068fdbe5838c4e236aa3baa5bf8da13c1.svg';
  const handleGetStartedPress = () => {
    navigation.navigate('RegisterScreen');
  };
  const handleSignInPress = () => {
    navigation.navigate('LoginScreen');
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
      style={screenStyles.WelcomeScreen.lgContainer}>
      <View style={screenStyles.WelcomeScreen.container}>
        {/* <SvgUri height={100} width={100} uri={imageUrl} /> */}
        <SvgLogoImg height={50} width={100} />
        <View style={screenStyles.WelcomeScreen.welcomeTextView}>
          <Text style={screenStyles.WelcomeScreen.welcomeText}>
            Welcome, Investor!
          </Text>
        </View>
        <View style={screenStyles.WelcomeScreen.welcomeTextDescView}>
          <Text style={screenStyles.WelcomeScreen.welcomeTextDesc}>
            Welcome to the Funding Societies |
          </Text>
          <Text style={screenStyles.WelcomeScreen.welcomeTextDesc}>
            Modaiku platform. Great to see you here!
          </Text>
        </View>
        <BlueButton onPress={handleGetStartedPress}>Get Started</BlueButton>
        <TouchableOpacity
          style={screenStyles.WelcomeScreen.signInView}
          onPress={handleSignInPress}>
          <Text style={screenStyles.WelcomeScreen.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;
