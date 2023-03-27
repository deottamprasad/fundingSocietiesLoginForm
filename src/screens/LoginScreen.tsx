import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar} from 'react-native';

import SvgLogoImg from '../assets/images/logo.svg';
import BlueButton from '../components/BlueButton';
import EmailInputField from '../components/EmailInputField';
import PasswordInputField from '../components/PasswordInputField';
import {RootStackParamList} from '../components/Main';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import HeaderBar from '../components/HeaderBar';
// import Icon from 'react-native-vector-icons/AntDesign';
import {fetchToken} from '../apiCalls/apiCalls';
import {screenStyles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen = ({navigation, route}: PropsType) => {
  const [email, setEmail] = useState('');
  const [onceEmailFocused, setOnceEmailFocused] = useState(false);
  const [oncePasswordFocused, setOncePasswordFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [isEmailFieldCorrect, setIsEmailFieldCorrect] = useState(false);
  const [isPasswordFieldCorrect, setIsPasswordFieldCorrect] = useState(false);
  const refPassword = useRef<TextInput>(null);

  const handleTokenReceived = async () => {
    const resData = await fetchToken(email, password);
    console.log(resData);
    if (!resData.error) {
      navigation.navigate('HomeScreen');
    }
  };

  const handleSignInPress = () => {
    if (isEmailFieldCorrect && isPasswordFieldCorrect) {
      handleTokenReceived();
      setEmail('');
      setPassword('');
      setOnceEmailFocused(false);
      setOncePasswordFocused(false);
    }
  };
  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPasswordScreen');
  };
  useEffect(() => {
    setEmail('');
    setPassword('');
    StatusBar.setHidden(true);
  }, []);
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Icon
  //         name="arrowleft"
  //         size={17}
  //         color="white"
  //         style={{
  //           position: 'absolute',
  //           right: '100%',
  //         }}
  //         onPress={() => navigation.goBack()}
  //       />
  //     ),
  //   });
  // }, [navigation]);
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
      style={screenStyles.LoginScreen.lgContainer}>
      <ScrollView>
        <View style={screenStyles.LoginScreen.container}>
          <View style={screenStyles.LoginScreen.titleView}>
            <SvgLogoImg height={40} width={40} />
            <View style={screenStyles.LoginScreen.fsTitleView}>
              <Text style={screenStyles.LoginScreen.fundingText}>funding</Text>
              <Text style={screenStyles.LoginScreen.societiesText}>
                societies
              </Text>
            </View>
          </View>
          <View style={screenStyles.LoginScreen.inputFieldsView}>
            <EmailInputField
              setIsEmailFieldCorrect={setIsEmailFieldCorrect}
              email={email}
              setEmail={setEmail}
              onceEmailFocused={onceEmailFocused}
              setOnceEmailFocused={setOnceEmailFocused}
              refPassword={refPassword}
            />
            <PasswordInputField
              setIsPasswordFieldCorrect={setIsPasswordFieldCorrect}
              password={password}
              setPassword={setPassword}
              oncePasswordFocused={oncePasswordFocused}
              setOncePasswordFocused={setOncePasswordFocused}
              isLoginScreen={true}
              refPassword={refPassword}
            />
          </View>
          <BlueButton
            onPress={handleSignInPress}
            isEmailFieldCorrect={isEmailFieldCorrect}
            isPasswordFieldCorrect={isPasswordFieldCorrect}>
            Sign In
          </BlueButton>
          <TouchableOpacity
            activeOpacity={0.9}
            style={screenStyles.LoginScreen.forgotPassTextView}>
            <Text
              style={screenStyles.LoginScreen.forgotPassText}
              onPress={handleForgotPasswordPress}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default LoginScreen;
