import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SettingTextView from '../components/SettingTextView';
import {RootStackParamList} from '../navigation/StackNavigator';
type PropsType = NativeStackScreenProps<RootStackParamList>;

const SettingScreen = ({navigation, route}: PropsType) => {
  const handleLogoutPress = () => {
    navigation.navigate('WelcomeScreen');
  };

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
      style={styles.lgContainer}>
      <ScrollView style={{}}>
        <Text style={styles.headerText}>Help & Support</Text>
        <View style={{}}>
          <SettingTextView
            img={require('../assets/images/question.png')}
            titleText="FAQ"
            text="Maybe we've already answered your question.Read our FAQs!"
          />
          <SettingTextView
            img={require('../assets/images/question.png')}
            titleText="Live Chat"
            text="Get help from our awesome Customer Support team to resolve your queries instantly."
          />
        </View>
        <Text style={styles.headerText}>Account</Text>
        <View style={{}}>
          <SettingTextView
            img={require('../assets/images/gift.png')}
            titleText="Refer your friends"
          />
          <SettingTextView
            img={require('../assets/images/globe.png')}
            titleText="Change Country"
            text="Invest in Singapore,Malaysia and/or Indonesia"
          />
          <SettingTextView
            onPress={handleLogoutPress}
            img={require('../assets/images/logout.png')}
            titleText="Logout"
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  lgContainer: {flex: 1, padding: '5%'},
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    paddingVertical: '3%',
  },
});
