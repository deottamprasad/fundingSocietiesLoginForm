import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import EmailInputField from '../components/EmailInputField';
import HeaderBar from '../components/HeaderBar';
import {RootStackParamList} from '../components/Main';
import {screenStyles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

const ForgotPasswordScreen = ({navigation, route}: PropsType) => {
  const [email, setEmail] = useState('');
  const [onceEmailFocused, setOnceEmailFocused] = useState(false);
  const [isEmailFieldCorrect, setIsEmailFieldCorrect] = useState(false);

  const handleNextButtonPress = () => {
    if (isEmailFieldCorrect) {
      setEmail('');
      setOnceEmailFocused(false);
      navigation.navigate('ResetPasswordScreen');
    }
  };
  useEffect(() => {
    StatusBar.setHidden(true);
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
      style={screenStyles.ForgotPasswordScreen.lgContainer}>
      <ScrollView>
        <View style={screenStyles.ForgotPasswordScreen.container}>
          <View style={screenStyles.ForgotPasswordScreen.upperContainer}>
            <View style={screenStyles.ForgotPasswordScreen.promptTextView}>
              <Text style={screenStyles.ForgotPasswordScreen.promptText}>
                Enter your registered email address to reset password
              </Text>
            </View>
            <EmailInputField
              setIsEmailFieldCorrect={setIsEmailFieldCorrect}
              email={email}
              setEmail={setEmail}
              onceEmailFocused={onceEmailFocused}
              setOnceEmailFocused={setOnceEmailFocused}
            />
          </View>
          <View style={screenStyles.ForgotPasswordScreen.bottomContainer}>
            <View style={screenStyles.ForgotPasswordScreen.bottomContentsView}>
              <Text style={screenStyles.ForgotPasswordScreen.continueText}>
                Continue
              </Text>
              <TouchableOpacity
                style={screenStyles.ForgotPasswordScreen.nextButtonImgView}
                activeOpacity={isEmailFieldCorrect ? 0.5 : 1}
                onPress={handleNextButtonPress}>
                <Image
                  source={require('../assets/images/nextButton.png')}
                  style={screenStyles.ForgotPasswordScreen.nextButtonImg}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ForgotPasswordScreen;
