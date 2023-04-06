import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

interface PropsType {
  children: React.ReactNode;
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<boolean>>;
  setIsOtherSelected: Dispatch<SetStateAction<boolean>>;
}

const HeaderTabItem = (props: PropsType) => {
  const {isSelected, setIsSelected, setIsOtherSelected} = props;
  const handlePress = () => {
    setIsSelected(prev => !prev);
    setIsOtherSelected(prev => !prev);
  };
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.headerTabItem, {borderWidth: isSelected ? 1 : 0}]}>
        <Text style={styles.headerTabText}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
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
});

export default HeaderTabItem;
