import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';
import {componentStyles} from '../styles/ComponentStyle';

interface PropsType {
  children: React.ReactNode;
}

const InvalidText = (props: PropsType) => {
  return (
    <View style={componentStyles.InvalidText.invalidTextView}>
      {props.children && (
        <Image
          source={require('../assets/images/invalidInput.jpg')}
          style={componentStyles.InvalidText.invalidInputImg}
        />
      )}
      <Text style={componentStyles.InvalidText.invalidText}>
        {props.children}
      </Text>
    </View>
  );
};

export default InvalidText;
