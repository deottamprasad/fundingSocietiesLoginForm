import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BlueButton from '../components/BlueButton';
import ConfirmPasswordInputField from '../components/ConfirmPasswordInputField';
import PasswordInputField from '../components/PasswordInputField';
import {RootStackParamList} from '../components/Main';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import HeaderBar from '../components/HeaderBar';
import {styles} from '../styles/ScreenStyle';
import {TextInput} from 'react-native-gesture-handler/lib/typescript/components/GestureComponents';

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
  const refPassword = useRef<TextInput>(null);

  const handleResetButtonPress = () => {
    if (isPasswordFieldCorrect && isConfirmPasswordFieldCorrect) {
      navigation.navigate('LoginScreen');
    }
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
        style={styles.ResetPasswordScreen.lgContainer}>
        {/* <HeaderBar navigation={navigation}>Reset Password</HeaderBar> */}
        <View style={styles.ResetPasswordScreen.container}>
          <View style={styles.ResetPasswordScreen.promptTextView}>
            <Text style={styles.ResetPasswordScreen.promptText}>
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
            refPassword={refPassword}
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
      </LinearGradient>
    </ScrollView>
  );
};

export default ResetPasswordScreen;
