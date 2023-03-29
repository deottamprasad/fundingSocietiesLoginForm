import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import EmailInputField from '../components/EmailInputField';
import HeaderBar from '../components/HeaderBar';
import {RootStackParamList} from '../components/Main';
import {styles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

const ForgotPasswordScreen = ({navigation, route}: PropsType) => {
  const [email, setEmail] = useState('');
  const [onceEmailFocused, setOnceEmailFocused] = useState(false);
  const [isEmailFieldCorrect, setIsEmailFieldCorrect] = useState(false);

  // const refPassword = useRef<TextInput>(null);

  const handleNextButtonPress = () => {
    if (isEmailFieldCorrect) {
      setEmail('');
      setOnceEmailFocused(false);
      navigation.navigate('ResetPasswordScreen');
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
        style={styles.ForgotPasswordScreen.lgContainer}>
        {/* <HeaderBar navigation={navigation}>Forgot Password</HeaderBar> */}
        <View style={styles.ForgotPasswordScreen.container}>
          <View style={styles.ForgotPasswordScreen.upperContainer}>
            <View style={styles.ForgotPasswordScreen.promptTextView}>
              <Text style={styles.ForgotPasswordScreen.promptText}>
                Enter your registered email address to reset password
              </Text>
            </View>
            <EmailInputField
              setIsEmailFieldCorrect={setIsEmailFieldCorrect}
              email={email}
              setEmail={setEmail}
              onceEmailFocused={onceEmailFocused}
              setOnceEmailFocused={setOnceEmailFocused}
              // refPassword={refPassword}
            />
          </View>
          <View style={styles.ForgotPasswordScreen.bottomContainer}>
            <View style={styles.ForgotPasswordScreen.bottomContentsView}>
              <Text style={styles.ForgotPasswordScreen.continueText}>
                Continue
              </Text>
              <TouchableOpacity
                style={styles.ForgotPasswordScreen.nextButtonImgView}
                activeOpacity={isEmailFieldCorrect ? 0 : 1}
                onPress={handleNextButtonPress}>
                <Image
                  source={require('../assets/images/nextButton.png')}
                  style={styles.ForgotPasswordScreen.nextButtonImg}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;
