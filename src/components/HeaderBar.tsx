import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from '../styles/ComponentStyle';
import {RootStackParamList} from '../navigation/StackNavigator';

interface PropsType {
  children: React.ReactNode;
  navigation:
    | NativeStackScreenProps<RootStackParamList, 'HomeScreen'>['navigation']
    | NativeStackScreenProps<RootStackParamList, 'LoginScreen'>['navigation']
    | NativeStackScreenProps<RootStackParamList, 'WelcomeScreen'>['navigation']
    | NativeStackScreenProps<RootStackParamList, 'RegisterScreen'>['navigation']
    | NativeStackScreenProps<
        RootStackParamList,
        'ForgotPasswordScreen'
      >['navigation']
    | NativeStackScreenProps<
        RootStackParamList,
        'ResetPasswordScreen'
      >['navigation'];
}

const HeaderBar = (props: PropsType) => {
  const navigateBack = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.HeaderBar.headerBar}>
      <Icon
        name="arrowleft"
        size={18}
        color="white"
        style={styles.HeaderBar.leftArrowIcon}
        onPress={navigateBack}
      />
      <Text style={styles.HeaderBar.titleText}>{props.children}</Text>
    </View>
  );
};

export default HeaderBar;
