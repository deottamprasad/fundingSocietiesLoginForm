import React, {useEffect, useRef, useState} from 'react';
import {View, Text, ScrollView, TextInput, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BlueButton from '../components/BlueButton';
import ConfirmPasswordInputField from '../components/ConfirmPasswordInputField';
import PasswordInputField from '../components/PasswordInputField';
import {RootStackParamList} from '../components/Main';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HeaderBar from '../components/HeaderBar';
import {screenStyles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<
  RootStackParamList,
  'ResetPasswordScreen'
>;

const ResetPasswordScreen = ({navigation, route}: PropsType) => {
  const [password, setPassword] = useState('');
  const [isPasswordFieldCorrect, setIsPasswordFieldCorrect] = useState(false);
  const [oncePasswordFocused, setOncePasswordFocused] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordFieldCorrect, setIsConfirmPasswordFieldCorrect] =
    useState(false);
  const [onceConfirmPasswordFocused, setOnceConfirmPasswordFocused] =
    useState(false);
  const refConfirmPassword = useRef<TextInput>(null);

  const handleResetButtonPress = () => {
    if (isPasswordFieldCorrect && isConfirmPasswordFieldCorrect) {
      navigation.navigate('LoginScreen');
    }
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
      style={screenStyles.ResetPasswordScreen.lgContainer}>
      <ScrollView>
        <View style={screenStyles.ResetPasswordScreen.container}>
          <View style={screenStyles.ResetPasswordScreen.promptTextView}>
            <Text style={screenStyles.ResetPasswordScreen.promptText}>
              Create new password
            </Text>
          </View>
          <PasswordInputField
            password={password}
            setPassword={setPassword}
            setIsPasswordFieldCorrect={setIsPasswordFieldCorrect}
            oncePasswordFocused={oncePasswordFocused}
            setOncePasswordFocused={setOncePasswordFocused}
            refConfirmPassword={refConfirmPassword}
          />
          <ConfirmPasswordInputField
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            setIsConfirmPasswordFieldCorrect={setIsConfirmPasswordFieldCorrect}
            onceConfirmPasswordFocused={onceConfirmPasswordFocused}
            setOnceConfirmPasswordFocused={setOnceConfirmPasswordFocused}
            password={password}
            refConfirmPassword={refConfirmPassword}
          />
          <BlueButton
            isPasswordFieldCorrect={isPasswordFieldCorrect}
            isConfirmPasswordFieldCorrect={isConfirmPasswordFieldCorrect}
            onPress={handleResetButtonPress}>
            Reset
          </BlueButton>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ResetPasswordScreen;
