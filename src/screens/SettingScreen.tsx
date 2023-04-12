import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {RootStackParamList} from '../navigation/StackNavigator';

import Data from '../assets/data/settingScreenData';
import {styles} from '../styles/ScreenStyle';
import ProfileCard from '../components/ProfileCard';

type PropsType = NativeStackScreenProps<RootStackParamList>;

const SettingsScreen = ({navigation, route}: PropsType) => {
  const [userImage, setUserImage] = useState<string>();
  const [email, setEmail] = useState<string>('eve.holt@reqres.in');
  const [dob, setDob] = useState<string | undefined>(
    JSON.stringify(new Date()).slice(1, 11),
  );
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
  const handleEditPress = () => {
    navigation.navigate('ProfileScreen', {
      userImage: userImage,
      setUserImage: setUserImage,
      userEmail: email,
      setUserEmail: setEmail,
      userDob: dob,
      setUserDob: setDob,
    });
  };

  // useEffect(()=> {
  //   if(route.params&&route.params.fileResponse)
  //   setUserImage(route.params.fileResponse);
  //   if(route.params&&route.params.dob)
  //   setDob(dob);
  // },[]);

  return (
    <View style={styles.SettingScreen.container}>
      <ScrollView>
        <ProfileCard>
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'flex-start',
            }}>
            <Image
              source={
                userImage
                  ? {uri: userImage}
                  : require('../assets/images/emptyProfile.jpg')
              }
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
                marginRight: '5%',
              }}
            />
            <View style={{flexDirection: 'column'}}>
              <Text style={{color: 'white', fontSize: 16, marginBottom: '2%'}}>
                {email}
              </Text>
              <TouchableOpacity
                style={{flexDirection: 'row', alignItems: 'center'}}
                onPress={handleEditPress}>
                <Text style={{color: 'white', fontSize: 13, marginRight: 5}}>
                  Edit Profile
                </Text>
                <FontAwesome name="pencil" size={12} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </ProfileCard>
        <SectionList
          sections={Data}
          scrollEnabled={false}
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
                  <Text style={styles.SettingScreen.titleText}>
                    {item.title}
                  </Text>
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
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
