import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/StackNavigator';
import SvgLogoImg from '../assets/images/logo.svg';
import CountryCard from '../components/CountryCard';
import BlueButton from '../components/BlueButton';

type PropsType = NativeStackScreenProps<
  RootStackParamList,
  'SelectCountryScreen'
>;

const SelectCountryScreen = ({navigation, route}: PropsType) => {
  const [selectCountry, setSelectCountry] = useState([
    false,
    false,
    false,
    false,
  ]);

  const handleSignInPress = () => {
    if (
      selectCountry[0] ||
      selectCountry[1] ||
      selectCountry[2] ||
      selectCountry[3]
    )
      if (route.params.isRegister) navigation.navigate('RegisterScreen');
      else navigation.navigate('LoginScreen');
  };

  return (
    <LinearGradient
      style={styles.lgcontainer}
      colors={[
        '#000B18',
        '#00172D',
        '#00264D',
        '#02386E',
        '#00498D',
        '#0052A2',
      ]}>
      <View style={styles.titleView}>
        <SvgLogoImg height={50} width={100} />
        <Text style={styles.fundingText}>funding</Text>
        <Text style={styles.societiesText}>societies</Text>
      </View>
      <Text style={styles.fundingText}>Select your Country</Text>
      <Text style={styles.randomText}>
        Please select the country you'd like to access our platfrom for
      </Text>
      <View style={styles.countryView}>
        <CountryCard
          text={'Thailand'}
          img={require('../assets/images/thailand.png')}
          selectCountry={selectCountry}
          setSelectCountry={setSelectCountry}
        />
        <CountryCard
          text={'Singapore'}
          img={require('../assets/images/singapore.png')}
          selectCountry={selectCountry}
          setSelectCountry={setSelectCountry}
        />
        <CountryCard
          text={'Malaysia'}
          img={require('../assets/images/malaysia.png')}
          selectCountry={selectCountry}
          setSelectCountry={setSelectCountry}
        />
        <CountryCard
          text={'Indonesia'}
          img={require('../assets/images/indonesia.png')}
          selectCountry={selectCountry}
          setSelectCountry={setSelectCountry}
        />
      </View>
      <BlueButton
        onPress={handleSignInPress}
        isCountryScreen={
          selectCountry[0] ||
          selectCountry[1] ||
          selectCountry[2] ||
          selectCountry[3]
        }>
        Continue
      </BlueButton>
    </LinearGradient>
  );
};

export default SelectCountryScreen;

const styles = StyleSheet.create({
  lgcontainer: {
    flex: 1,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '7%',
    justifyContent: 'center',
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
  randomText: {
    color: '#f1f1f1',
    fontSize: 15,
    fontWeight: '200',
    marginTop: '5%',
    textAlign: 'center',
  },
  countryView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
});
