import React, {RefObject, useEffect, useState} from 'react';
import {SetStateAction} from 'react';
import {Dispatch} from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from '../styles/ComponentStyle';
import InvalidText from './InvalidText';

interface PropsType {
  setIsEmailFieldCorrect: Dispatch<SetStateAction<boolean>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  onceEmailFocused: boolean;
  setOnceEmailFocused: Dispatch<SetStateAction<boolean>>;
  refPassword?: RefObject<TextInput>;
}

const EmailInputField = (props: PropsType) => {
  const {email, setEmail} = props;
  const {onceEmailFocused: onceFocused, setOnceEmailFocused: setOnceFocused} =
    props;
  const {refPassword} = props;
  const [validationEmail, setValidationEmail] = useState('');
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  useEffect(() => {});
  const handleEmailChange = (txt: string) => {
    setEmail(txt);
  };
  useEffect(() => {
    props.setIsEmailFieldCorrect(false);
    if (onceFocused) {
      if (email.length === 0) {
        setValidationEmail('Email should not be empty');
      } else if (!emailRegex.test(email)) {
        setValidationEmail('Invalid email address');
      } else {
        setValidationEmail('');
        props.setIsEmailFieldCorrect(true);
      }
    } else {
      setValidationEmail('');
    }
  }, [onceFocused]);

  const borderColor = () => {
    if (validationEmail == '') return 'white';
    else return '#ff9933';
  };
  return (
    <>
      {email.length > 0 && (
        <Text style={styles.EmailInputField.emailLabel}>Email</Text>
      )}
      <TextInput
        placeholder="Email"
        style={[
          styles.EmailInputField.inputField,
          {borderBottomColor: borderColor()},
        ]}
        placeholderTextColor="white"
        keyboardType="email-address"
        value={email}
        onChangeText={handleEmailChange}
        onSubmitEditing={() => refPassword?.current?.focus()}
        onBlur={() => setOnceFocused(true)}
        onFocus={() => setOnceFocused(false)}
      />
      <InvalidText>{validationEmail}</InvalidText>
    </>
  );
};

export default EmailInputField;
