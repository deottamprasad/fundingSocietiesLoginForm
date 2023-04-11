import React from 'react';
import {View, Image} from 'react-native';
import {RootStackParamList} from '../navigation/StackNavigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type PropsType = NativeStackScreenProps<RootStackParamList>;

const ProfileScreen = ({navigation, route}: PropsType) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00264D',
        alignItems: 'center',
      }}>
      <View>
        <Image
          style={{height: 90, width: 90}}
          source={require('../assets/images/user.png')}
        />
        <Image
          style={{
            position: 'absolute',
            height: 30,
            width: 30,
            resizeMode: 'cover',
          }}
          source={require('../assets/images/upload.png')}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
