import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import BUTTON from '../assets/constants/colorCodes';
import {styles} from '../styles/ComponentStyle';

interface PropsType {
  children: React.ReactNode;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  isEmailFieldCorrect?: boolean;
  isPasswordFieldCorrect?: boolean;
  isConfirmPasswordFieldCorrect?: boolean;
}

const BlueButton = (props: PropsType) => {
  let emailFieldNotProvided = true;
  let passwordFieldNotProvided = true;
  let confirmPasswordFieldNotProvided = true;
  if (props.isEmailFieldCorrect != undefined) {
    emailFieldNotProvided = props.isEmailFieldCorrect;
  }
  if (props.isConfirmPasswordFieldCorrect != undefined) {
    confirmPasswordFieldNotProvided = props.isConfirmPasswordFieldCorrect;
  }
  if (props.isPasswordFieldCorrect != undefined) {
    passwordFieldNotProvided = props.isPasswordFieldCorrect;
  }

  return (
    <>
      <TouchableOpacity
        activeOpacity={
          emailFieldNotProvided &&
          passwordFieldNotProvided &&
          confirmPasswordFieldNotProvided
            ? 0.5
            : 1
        }
        style={[
          styles.BlueButton.buttonView,
          emailFieldNotProvided &&
          passwordFieldNotProvided &&
          confirmPasswordFieldNotProvided
            ? {backgroundColor: BUTTON.PRIMARY.BG}
            : {backgroundColor: BUTTON.DISABLED.BG},
        ]}
        onPress={props.onPress}>
        <Text
          style={[
            styles.BlueButton.buttonText,
            emailFieldNotProvided &&
            passwordFieldNotProvided &&
            confirmPasswordFieldNotProvided
              ? {color: BUTTON.PRIMARY.TEXT}
              : {color: BUTTON.DISABLED.TEXT},
          ]}>
          {props.children}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default BlueButton;
