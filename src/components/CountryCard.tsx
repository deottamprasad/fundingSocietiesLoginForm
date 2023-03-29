import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {CountryContext} from '../screens/SelectCountryScreen';

interface PropsType {
  text: string;
  img: ImageSourcePropType;
  selectCountry?: boolean;
  setselectCountry?: Dispatch<SetStateAction<boolean>>;
}
type CountryContextType = {
  selectCountry: boolean;
  setSelectCountry: Dispatch<SetStateAction<boolean>>;
};

const CountryCard = (props: PropsType) => {
  const [pressed, setPressed] = useState(false);
  // const countryContext = useContext(CountryContext);
  //console.log(countryContext);
  const {selectCountry, setSelectCountry} =
    useContext<CountryContextType>(CountryContext);
  //console.log(selectCountry);
  const handleOnPress = () => {
    if ((!pressed && !selectCountry) || (pressed && selectCountry))
      setPressed(!pressed);
  };
  console.log(pressed, selectCountry);
  useEffect(() => {
    if (pressed) setSelectCountry(true);
    else setSelectCountry(false);
  }, [pressed]);
  //console.log(props.img);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={selectCountry ? 1 : 0.1}
        onPress={handleOnPress}
        style={[
          styles.cardView,
          {
            backgroundColor: pressed ? 'white' : 'rgba(255, 255, 255, 0.2)',
          },
        ]}>
        <Image style={styles.flagImg} source={props.img} />

        <Text
          style={[styles.countryName, {color: pressed ? 'black' : 'white'}]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  cardView: {
    height: '35%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
    padding: '9%',
  },
  countryName: {
    color: 'white',
    fontSize: 17,
    marginTop: '5%',
    fontWeight: '300',
  },
  flagImg: {
    height: '45%',
    width: '60%',
  },
});
