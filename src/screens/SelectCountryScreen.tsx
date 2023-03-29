import React, {
  createContext,
  Dispatch,
  ProviderProps,
  SetStateAction,
  useState,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../components/Main';
import SvgLogoImg from '../assets/images/logo.svg';
import CountryCard from '../components/CountryCard';
import BlueButton from '../components/BlueButton';

type PropsType = NativeStackScreenProps<
  RootStackParamList,
  'SelectCountryScreen'
>;
// interface PropsType {
//   navigation: NativeStackScreenProps<RootStackParamList, 'SelectCountryScreen'>;
// }

interface CountryContextType {
  selectCountry: boolean;
  setSelectCountry: Dispatch<SetStateAction<boolean>>;
}

export const CountryContext = createContext({} as CountryContextType);

const SelectCountryScreen = ({navigation, route}: PropsType) => {
  const [selectCountry, setSelectCountry] = useState<boolean>(false);

  const handleSignInPress = () => {
    if (selectCountry) navigation.navigate('LoginScreen');
  };
  //console.log('ok', selectCountry);

  return (
    <CountryContext.Provider value={{selectCountry, setSelectCountry}}>
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
          />
          <CountryCard
            text={'Singapore'}
            img={require('../assets/images/singapore.png')}
          />
          <CountryCard
            text={'Malaysia'}
            img={require('../assets/images/malaysia.png')}
          />
          <CountryCard
            text={'Indonesia'}
            img={require('../assets/images/indonesia.png')}
          />
        </View>
        <BlueButton onPress={handleSignInPress} isCountryScreen={true}>
          Continue
        </BlueButton>
      </LinearGradient>
    </CountryContext.Provider>
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
    marginBottom: '20%',
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
    //   justifyContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    // backgroundColor: 'pink',
  },
});
