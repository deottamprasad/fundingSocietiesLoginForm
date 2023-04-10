import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import {RootStackParamList} from '../navigation/StackNavigator';

import Data from '../assets/data/settingScreenData';
import {styles} from '../styles/ScreenStyle';

type PropsType = NativeStackScreenProps<RootStackParamList>;

const SettingsScreen = ({navigation, route}: PropsType) => {
  const handleLogoutPress = () => {
    Alert.alert('Logout', 'Press ok to logout', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'ok',
        onPress: () => navigation.navigate('WelcomeScreen'),
        style: 'default',
      },
    ]);
  };
  const handleReferFriendsPress = () => {
    navigation.navigate('ReferScreen');
  };

  return (
    <View style={styles.SettingScreen.container}>
      <SectionList
        sections={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.SettingScreen.tileView,
              {
                borderTopLeftRadius: item.id == '0' ? 15 : 0,
                borderTopRightRadius: item.id == '0' ? 15 : 0,
                borderBottomLeftRadius: item.border ? 10 : 0,
                borderBottomRightRadius: item.border ? 10 : 0,
                marginBottom: item.border ? '3%' : 0,
              },
            ]}>
            <TouchableOpacity
              style={[
                styles.SettingScreen.buttonView,
                {
                  borderTopWidth: item.id != '0' ? 0.5 : 0,
                },
              ]}
              onPress={() =>
                item.title == 'Logout'
                  ? handleLogoutPress()
                  : item.title == 'Refer Friends'
                  ? handleReferFriendsPress()
                  : null
              }>
              <Image style={styles.SettingScreen.img} source={item.img} />
              <View style={styles.SettingScreen.titleView}>
                <Text style={styles.SettingScreen.titleText}>{item.title}</Text>
                {item.text != '' && (
                  <Text style={styles.SettingScreen.descriptionText}>
                    {item.text}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
        )}
        renderSectionHeader={({section: {heading}}) => (
          <Text style={styles.SettingScreen.headerText}>{heading}</Text>
        )}
      />
    </View>
  );
};

export default SettingsScreen;
