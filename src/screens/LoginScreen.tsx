import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SvgLogoImg from '../assets/images/logo.svg';
import BlueButton from '../components/BlueButton';
import EmailInputField from '../components/EmailInputField';
import PasswordInputField from '../components/PasswordInputField';
import {RootStackParamList} from '../navigation/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {fetchToken} from '../apiCalls/apiCalls';
import {styles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen = ({navigation, route}: PropsType) => {
  const [email, setEmail] = useState('');
  const [onceEmailFocused, setOnceEmailFocused] = useState(false);
  const [oncePasswordFocused, setOncePasswordFocused] = useState(false);
  const [password, setPassword] = useState('');
  const [isEmailFieldCorrect, setIsEmailFieldCorrect] = useState(false);
  const [isPasswordFieldCorrect, setIsPasswordFieldCorrect] = useState(false);
  const refPassword = useRef<TextInput>(null);
  const [loading, setLoading] = useState<React.ReactNode>(null);

  const handleTokenReceived = async () => {
    const resData = await fetchToken(email, password);
    console.log(resData);
    if (!resData.error) {
      navigation.navigate('MyTab');
    } else {
      setLoading(null);
    }
    setEmail('');
    setPassword('');
  };

  const handleSignInPress = () => {
    if (isEmailFieldCorrect && isPasswordFieldCorrect) {
      setLoading(<ActivityIndicator size="large" color="#005282" />);
      handleTokenReceived();
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
    setLoading(null);
  }, []);

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
      style={styles.LoginScreen.lgContainer}>
      {loading}
      <ScrollView>
        <View style={styles.LoginScreen.container}>
          <View style={styles.LoginScreen.titleView}>
            <SvgLogoImg height={40} width={40} />
            <View style={styles.LoginScreen.fsTitleView}>
              <Text style={styles.LoginScreen.fundingText}>funding</Text>
              <Text style={styles.LoginScreen.societiesText}>societies</Text>
            </View>
          </View>
          <View style={styles.LoginScreen.inputFieldsView}>
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
            style={styles.LoginScreen.forgotPassTextView}>
            <Text
              style={styles.LoginScreen.forgotPassText}
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
