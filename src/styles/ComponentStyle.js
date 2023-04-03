import {StyleSheet} from 'react-native';

export const styles = {
  BlueButton: StyleSheet.create({
    buttonView: {
      backgroundColor: '#0096FF',
      alignItems: 'center',
      justifyContent: 'center',
      height: 35,
      width: '90%',
      borderRadius: 5,
      marginTop: '2%',
      marginBottom: '4%',
    },
    buttonText: {
      color: 'white',
      fontSize: 15,
    },
  }),
  ConfirmPasswordInputField: StyleSheet.create({
    inputField: {
      width: '90%',
      height: 20,
      color: 'white',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      padding: 0,
      marginTop: 0,
    },
    passInputView: {
      flexDirection: 'row',
    },
    passLabel: {
      color: '#f3f3f3',
      fontSize: 10,
      alignSelf: 'flex-start',
      marginLeft: '5%',
    },
    eyeIconView: {
      alignSelf: 'flex-end',
      paddingBottom: 5,
      //borderColor: 'white',
      borderBottomWidth: 1,
    },
    eyeIcon: {
      width: 15,
      height: 14,
    },
  }),
  EmailInputField: StyleSheet.create({
    emailLabel: {
      color: '#f3f3f3',
      fontSize: 10,
      alignSelf: 'flex-start',
      marginLeft: '5%',
    },
    inputField: {
      width: '90%',
      height: 20,
      color: 'white',
      //  borderBottomColor: 'white',
      borderBottomWidth: 1,
      padding: 0,
      marginTop: 0,
    },
  }),
  InvalidText: StyleSheet.create({
    invalidTextView: {
      marginBottom: '7%',
      marginLeft: '5%',
      marginRight: '5%',
      width: '90%',
      paddingRight: '5%',
      overflow: 'visible',
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
    invalidInputImg: {
      marginTop: 5,
      marginBottom: 5,
      marginRight: 5,
      height: 12,
      width: 12,
      borderRadius: 7.5,
    },
    invalidText: {
      color: '#ff9933',
      fontSize: 10,
    },
  }),
  PasswordInputField: StyleSheet.create({
    inputField: {
      width: '90%',
      height: 20,
      color: 'white',
      borderBottomColor: 'white',
      borderBottomWidth: 1,
      padding: 0,
      marginTop: 0,
    },
    passInputView: {
      flexDirection: 'row',
    },
    passLabel: {
      color: '#f3f3f3',
      fontSize: 10,
      alignSelf: 'flex-start',
      marginLeft: '5%',
    },
    eyeIconView: {
      alignSelf: 'flex-end',
      paddingBottom: 5,
      borderColor: 'white',
      borderBottomWidth: 1,
    },
    eyeIcon: {
      width: 15,
      height: 14,
    },
  }),
  HeaderTabItem: StyleSheet.create({
    headerTabItem: {
      width: '48%',
      paddingVertical: '2.5%',
      borderRadius: 30,
      borderColor: '#0000FF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTabText: {
      color: 'white',
    },
  }),
  FlatListItem :StyleSheet.create({
    itemView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: '4%',
      borderBottomColor: 'white',
      borderBottomWidth: 0.5,
    },
    firstCol: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    dateMoneyText: {
      fontSize: 15,
      color: 'white',
    },
    actionStatusText: {
      fontSize: 14,
      color: '#EBEBE3',
    },
    secondCol: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
    moneyView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    statusView: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    dateText: {
      marginRight: '2%',
      marginLeft: 1,
    },
    statusText: {
      marginLeft: '5%',
    },
  }),
};
