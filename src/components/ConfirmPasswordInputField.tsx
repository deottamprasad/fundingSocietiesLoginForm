import React, {RefObject, useEffect, useState} from 'react';
import {SetStateAction} from 'react';
import {Dispatch} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {styles} from '../styles/ComponentStyle';
import InvalidText from './InvalidText';

interface PropsType {
  setIsConfirmPasswordFieldCorrect: Dispatch<SetStateAction<boolean>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  onceConfirmPasswordFocused: boolean;
  setOnceConfirmPasswordFocused: Dispatch<SetStateAction<boolean>>;
  password: string;
  refConfirmPassword: RefObject<TextInput>;
}

const ConfirmPasswordInputField = (props: PropsType) => {
  const {confirmPassword, setConfirmPassword} = props;
  const [isConfirmEyeButtonOn, setIsConfirmEyeButtonOn] = useState(true);
  const [isConfirmSecuredEntry, setIsConfirmSecuredEntry] = useState(true);
  const {
    onceConfirmPasswordFocused: onceFocused,
    setOnceConfirmPasswordFocused: setOnceFocused,
  } = props;
  const [validationConfirmPassword, setValidationConfirmPassword] =
    useState('');
  const handleConfirmEyeButtonPress = () => {
    setIsConfirmEyeButtonOn(prevEyeButton => !prevEyeButton);
  };
  const handleConfirmPasswordChange = (txt: string) => {
    setConfirmPassword(txt);
  };
  useEffect(() => {
    setIsConfirmSecuredEntry(isConfirmEyeButtonOn);
  }, [isConfirmEyeButtonOn]);
  useEffect(() => {
    props.setIsConfirmPasswordFieldCorrect(false);
    if (onceFocused) {
      if (confirmPassword.length === 0) {
        setValidationConfirmPassword('Confirm Password should not be empty');
      } else if (props.password !== confirmPassword) {
        setValidationConfirmPassword(
          "Password and Confirm Password doesn't match",
        );
      } else {
        setValidationConfirmPassword('');
        props.setIsConfirmPasswordFieldCorrect(true);
      }
    } else {
      setValidationConfirmPassword('');
    }
  }, [onceFocused]);
  return (
    <>
      {confirmPassword.length > 0 && (
        <Text style={styles.ConfirmPasswordInputField.passLabel}>
          Confirm Password
        </Text>
      )}
      <View style={styles.ConfirmPasswordInputField.passInputView}>
        <TextInput
          placeholder="Confirm Password"
          style={[
            styles.ConfirmPasswordInputField.inputField,
            confirmPassword.length > 0 ? {width: '85%'} : {width: '90%'},
            {
              borderBottomColor: validationConfirmPassword
                ? '#ff9933'
                : 'white',
            },
          ]}
          placeholderTextColor="white"
          keyboardType="ascii-capable"
          secureTextEntry={isConfirmSecuredEntry}
          textContentType="password"
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          ref={props.refConfirmPassword}
          onBlur={() => {
            setOnceFocused(true);
          }}
          onFocus={() => setOnceFocused(false)}
        />
        {confirmPassword.length > 0 && isConfirmEyeButtonOn && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.ConfirmPasswordInputField.eyeIconView,
              {
                borderBottomColor: validationConfirmPassword
                  ? '#ff9933'
                  : 'white',
              },
            ]}
            onPress={handleConfirmEyeButtonPress}>
            <Icon
              name="eye"
              size={15}
              color="white"
              style={styles.ConfirmPasswordInputField.eyeIcon}
            />
          </TouchableOpacity>
        )}
        {confirmPassword.length > 0 && !isConfirmEyeButtonOn && (
          <TouchableOpacity
            activeOpacity={0.9}
            style={[
              styles.ConfirmPasswordInputField.eyeIconView,
              {
                borderBottomColor: validationConfirmPassword
                  ? '#ff9933'
                  : 'white',
              },
            ]}
            onPress={handleConfirmEyeButtonPress}>
            <Icon
              name="eye-off"
              size={15}
              color="white"
              style={styles.ConfirmPasswordInputField.eyeIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <InvalidText>{validationConfirmPassword}</InvalidText>
    </>
  );
};

export default ConfirmPasswordInputField;
