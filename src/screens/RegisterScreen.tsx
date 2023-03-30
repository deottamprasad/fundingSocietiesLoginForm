import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SvgLogoImg from '../assets/images/logo.svg';
import BlueButton from '../components/BlueButton';
import ConfirmPasswordInputField from '../components/ConfirmPasswordInputField';
import EmailInputField from '../components/EmailInputField';
import PasswordInputField from '../components/PasswordInputField';
import {RootStackParamList} from '../components/Main';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HeaderBar from '../components/HeaderBar';
import {fetchIdAndToken} from '../apiCalls/apiCalls';
import {styles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<RootStackParamList, 'RegisterScreen'>;

const RegisterScreen = ({navigation, route}: PropsType) => {
  const [email, setEmail] = useState('');
  const [onceEmailFocused, setOnceEmailFocused] = useState(false);
  const [isEmailFieldCorrect, setIsEmailFieldCorrect] = useState(false);
  const [password, setPassword] = useState('');
  const [isPasswordFieldCorrect, setIsPasswordFieldCorrect] = useState(false);
  const [oncePasswordFocused, setOncePasswordFocused] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordFieldCorrect, setIsConfirmPasswordFieldCorrect] =
    useState(false);
  const [onceConfirmPasswordFocused, setOnceConfirmPasswordFocused] =
    useState(false);

  const refConfirmPassword = useRef<TextInput>(null);
  const refPassword = useRef<TextInput>(null);

  const handleIdAndTokenReceived = async () => {
    const resData = await fetchIdAndToken(email, password);
    console.log(resData);
    if (!resData.error) {
      navigation.navigate('WelcomeScreen');
    }
  };

  const handleRegisterButtonPress = () => {
    if (
      isEmailFieldCorrect &&
      isPasswordFieldCorrect &&
      isConfirmPasswordFieldCorrect
    ) {
      handleIdAndTokenReceived();
    }
    setEmail('');
    setPassword('');
    setOnceEmailFocused(false);
    setOncePasswordFocused(false);
    setConfirmPassword('');
    setOnceConfirmPasswordFocused(false);
  };
  return (
    <ScrollView>
      <LinearGradient
        colors={[
          '#000B18',
          '#00172D',
          '#00264D',
          '#02386E',
          '#00498D',
          '#0052A2',
        ]}
        style={styles.RegisterScreen.lgContainer}>
        {/* <HeaderBar navigation={navigation}>Register</HeaderBar> */}
        <View style={styles.RegisterScreen.container}>
          <View style={styles.RegisterScreen.titleView}>
            <SvgLogoImg height={40} width={40} />
            <View style={styles.RegisterScreen.fsTitleView}>
              <Text style={styles.RegisterScreen.fundingText}>funding</Text>
              <Text style={styles.RegisterScreen.societiesText}>societies</Text>
            </View>
          </View>
          <View style={styles.RegisterScreen.inputFieldsView}>
            <EmailInputField
              setIsEmailFieldCorrect={setIsEmailFieldCorrect}
              email={email}
              setEmail={setEmail}
              onceEmailFocused={onceEmailFocused}
              setOnceEmailFocused={setOnceEmailFocused}
              refPassword={refPassword}
            />
            <PasswordInputField
              password={password}
              setPassword={setPassword}
              setIsPasswordFieldCorrect={setIsPasswordFieldCorrect}
              oncePasswordFocused={oncePasswordFocused}
              setOncePasswordFocused={setOncePasswordFocused}
              refConfirmPassword={refConfirmPassword}
              refPassword={refPassword}
            />
            <ConfirmPasswordInputField
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              setIsConfirmPasswordFieldCorrect={
                setIsConfirmPasswordFieldCorrect
              }
              onceConfirmPasswordFocused={onceConfirmPasswordFocused}
              setOnceConfirmPasswordFocused={setOnceConfirmPasswordFocused}
              password={password}
              refConfirmPassword={refConfirmPassword}
            />
            <BlueButton
              onPress={handleRegisterButtonPress}
              isEmailFieldCorrect={isEmailFieldCorrect}
              isPasswordFieldCorrect={isPasswordFieldCorrect}
              isConfirmPasswordFieldCorrect={isConfirmPasswordFieldCorrect}>
              Register
            </BlueButton>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default RegisterScreen;
