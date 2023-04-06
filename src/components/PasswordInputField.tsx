import React, {RefObject, SetStateAction, useEffect, useState} from 'react';
import {Dispatch} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from '../styles/ComponentStyle';
import InvalidText from './InvalidText';

interface PropsType {
  setIsPasswordFieldCorrect: Dispatch<SetStateAction<boolean>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  oncePasswordFocused: boolean;
  setOncePasswordFocused: Dispatch<SetStateAction<boolean>>;
  isLoginScreen?: boolean;
  refConfirmPassword: RefObject<TextInput>;
  refPassword: RefObject<TextInput>;
}

const PasswordInputField = (props: PropsType) => {
  const {password, setPassword} = props;
  const [isEyeButtonOn, setIsEyeButtonOn] = useState(true);
  const [isSecuredEntry, setIsSecuredEntry] = useState(true);
  const {
    oncePasswordFocused: onceFocused,
    setOncePasswordFocused: setOnceFocused,
  } = props;
  const [validationPassword, setValidationPassword] = useState('');
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const {refConfirmPassword} = props;
  const {refPassword} = props;
  console.log(props.isLoginScreen);
  const handleEyeButtonPress = () => {
    setIsEyeButtonOn(prevEyeButton => !prevEyeButton);
  };
  const handlePasswordChange = (txt: string) => {
    setPassword(txt);
  };
  useEffect(() => {
    setIsSecuredEntry(isEyeButtonOn);
  }, [isEyeButtonOn]);
  useEffect(() => {
    props.setIsPasswordFieldCorrect(false);
    if (onceFocused) {
      if (password.length === 0) {
        setValidationPassword('Password should not be empty');
      } else if (password.length < 6 && !props.isLoginScreen) {
        setValidationPassword('Minimum 6 characters');
      } else if (password.length > 16 && !props.isLoginScreen) {
        setValidationPassword('Maximum 16 characters');
      } else if (!passwordRegex.test(password) && !props.isLoginScreen) {
        setValidationPassword(
          'Password should atleast contain a digit and a special character',
        );
      } else {
        setValidationPassword('');
        props.setIsPasswordFieldCorrect(true);
      }
    }
  }, [onceFocused]);

  const borderColor = () => {
    if (validationPassword == '') return 'white';
    else return '#ff9933';
  };
  return (
    <>
      {password.length > 0 && (
        <Text style={styles.PasswordInputField.passLabel}>Password</Text>
      )}
      <View style={styles.PasswordInputField.passInputView}>
        <TextInput
          placeholder="Password"
          style={[
            styles.PasswordInputField.inputField,
            password.length > 0 ? {width: '85%'} : {width: '90%'},
            {borderBottomColor: borderColor()},
          ]}
          placeholderTextColor="white"
          keyboardType="ascii-capable"
          secureTextEntry={isSecuredEntry}
          textContentType="password"
          value={password}
          onChangeText={handlePasswordChange}
          ref={refPassword}
          onSubmitEditing={() => refConfirmPassword.current?.focus()}
          onBlur={() => setOnceFocused(true)}
          onFocus={() => setOnceFocused(false)}
          blurOnSubmit={props.isLoginScreen || false}
        />
        {password.length > 0 && isEyeButtonOn && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.PasswordInputField.eyeIconView,
              {borderBottomColor: borderColor()},
            ]}
            onPress={handleEyeButtonPress}>
            <Icon
              name="eye"
              size={15}
              color="white"
              style={styles.PasswordInputField.eyeIcon}
            />
          </TouchableOpacity>
        )}
        {password.length > 0 && !isEyeButtonOn && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.PasswordInputField.eyeIconView,
              {borderBottomColor: borderColor()},
            ]}
            onPress={handleEyeButtonPress}>
            <Icon
              name="eye-off"
              size={15}
              color="white"
              style={styles.PasswordInputField.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <InvalidText>{validationPassword}</InvalidText>
    </>
  );
};
export default PasswordInputField;
