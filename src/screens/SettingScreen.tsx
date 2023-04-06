import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {RootStackParamList} from '../navigation/StackNavigator';
import {settingData as DATA} from '../assets/data/settingsData';

type PropsType = NativeStackScreenProps<RootStackParamList>;

const SettingsScreen = ({navigation, route}: PropsType) => {
  const handleReferPress = () => {
    navigation.navigate('ReferScreen');
  };
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

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={[
              styles.tileView,
              {
                borderTopLeftRadius: item.id == '0' ? 15 : 0,
                borderTopRightRadius: item.id == '0' ? 15 : 0,
                borderBottomLeftRadius: item.border ? 10 : 0,
                borderBottomRightRadius: item.border ? 10 : 0,
              },
            ]}>
            <TouchableOpacity
              style={[
                styles.buttonView,
                {
                  borderTopWidth: item.id != '0' ? 0.5 : 0,
                },
              ]}
              onPress={() => {
                item.title == 'Logout' ? handleLogoutPress() : null,
                  item.title == 'Refer Friends' ? handleReferPress() : null;
              }}>
              <Image style={styles.img} source={item.img} />
              <View style={styles.titleView}>
                <Text style={styles.titleText}>{item.title}</Text>
                {item.text != '' && (
                  <Text style={styles.descriptionText}>{item.text}</Text>
                )}
              </View>
            </TouchableOpacity>
          </View>
        )}
        renderSectionHeader={({section: {heading}}) => (
          <Text style={styles.headerText}>{heading}</Text>
        )}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {backgroundColor: '#00264D', flex: 1, paddingHorizontal: '5%'},
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: '0.5%',
    marginTop: '3%',
    padding: '2%',
  },
  tileView: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },

  buttonView: {
    flex: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    flexDirection: 'row',
    padding: '3%',
  },
  titleView: {
    marginHorizontal: '5%',
    paddingRight: '10%',
  },
  titleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    margin: '1%',
  },
  descriptionText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '200',
    margin: '1%',
  },
  img: {
    height: 20,
    width: 20,
    alignSelf: 'flex-start',
    marginLeft: '3%',
    marginTop: '1%',
  },
});
