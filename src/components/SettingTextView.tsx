import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
  GestureResponderEvent,
} from 'react-native';

interface PropsType {
  titleText: String;
  text?: String;
  img: ImageSourcePropType;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}
const SettingTextView = (props: PropsType) => {
  return (
    <TouchableOpacity style={styles.tileView} onPress={props.onPress}>
      <Image style={styles.imgStyle} source={props.img} />
      <View style={styles.textView}>
        <Text style={styles.titleText}>{props.titleText}</Text>
        {props.text && <Text style={styles.text}>{props.text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default SettingTextView;

const styles = StyleSheet.create({
  imgStyle: {
    resizeMode: 'contain',
    maxHeight: 20,
    maxWidth: 25,
    marginVertical: '3%',
    marginRight: '3%',
  },
  tileView: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: '3%',
    borderColor: 'white',
    borderBottomWidth: 0.7,
    flexDirection: 'row',
    //borderRadius: 7,
    //marginVertical: '0.5%',
  },
  textView: {flex: 1, paddingRight: '2%'},
  titleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: '2%',
  },
  text: {
    color: 'white',
    fontSize: 13,
    fontWeight: '200',
  },
});
