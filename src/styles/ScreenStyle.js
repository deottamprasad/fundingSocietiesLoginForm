import {Dimensions, StyleSheet} from 'react-native';

export const styles = {
  ForgotPasswordScreen: StyleSheet.create({
    lgContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      paddingTop: '2%',
      height: Dimensions.get('window').height,
    },
    upperContainer: {
      flex: 7,
      alignItems: 'center',
      borderBottomColor: 'white',
      borderBottomWidth: 0.4,
    },
    promptTextView: {
      width: '90%',
      marginVertical: '5%',
    },
    promptText: {
      color: 'white',
    },
    bottomContainer: {
      flex: 2,
    },
    bottomContentsView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingTop: '2%',
    },
    continueText: {
      color: 'white',
      fontWeight: 'bold',
      marginTop: '2%',
    },
    nextButtonImgView: {
      marginHorizontal: '5%',
    },
    nextButtonImg: {
      height: 36,
      width: 36,
      borderRadius: 50,
    },
  }),
  HomeScreen: StyleSheet.create({
    lgContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: '5%',
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '20%',
    },
    fsTitleView: {
      flexDirection: 'row',
      marginLeft: '4%',
    },
    fundingText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 23,
      marginRight: 5,
    },
    societiesText: {
      color: 'white',
      fontSize: 23,
      fontWeight: '300',
    },
    homeText: {
      fontSize: 23,
      color: 'white',
    },
    accountView: {},
    accountText: {
      color: 'white',
      fontSize: 15,
    },
  }),
  LoginScreen: StyleSheet.create({
    lgContainer: {
      flex: 1
    },
    container: {
      flex: 1,
      paddingTop: '20%',
      alignItems: 'center',
      height: Dimensions.get('window').height,
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '20%',
    },
    fsTitleView: {
      flexDirection: 'row',
      marginLeft: '4%',
    },
    fundingText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 23,
      marginRight: 5,
    },
    societiesText: {
      color: 'white',
      fontSize: 23,
      fontWeight: '300',
    },
    inputFieldsView: {
      width: '100%',
      alignItems: 'center',
      marginTop: '2%',
    },
    forgotPassTextView: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      paddingRight: '5%',
    },
    forgotPassText: {
      color: 'white',
      fontSize: 12,
    },
  }),
  RegisterScreen: StyleSheet.create({
    lgContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: '20%',
      height: Dimensions.get('window').height,
    },
    titleView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: '20%',
    },
    fsTitleView: {
      flexDirection: 'row',
      marginLeft: '4%',
    },
    fundingText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 23,
      marginRight: 5,
    },
    societiesText: {
      color: 'white',
      fontSize: 23,
      fontWeight: '300',
    },
    inputFieldsView: {
      width: '100%',
      alignItems: 'center',
      marginVertical: '2%',
    },
  }),
  ResetPasswordScreen: StyleSheet.create({
    lgContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: '5%',
      height: Dimensions.get('window').height,
    },
    promptTextView: {
      width: '90%',
      marginVertical: '10%',
    },
    promptText: {
      color: 'white',
      fontSize: 23,
    },
  }),
  WelcomeScreen: StyleSheet.create({
    lgContainer: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    welcomeTextView: {
      marginTop: '5%',
    },
    welcomeText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    welcomeTextDescView: {
      marginTop: 5,
      alignItems: 'center',
      marginBottom: '20%',
    },
    welcomeTextDesc: {
      color: 'white',
      fontSize: 14,
    },
    signInView: {
      marginVertical: '5%',
    },
    signInText: {
      color: 'white',
    },
  }),
};
