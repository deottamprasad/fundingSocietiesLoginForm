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
  const Data = [
    {
      heading: 'Help & Support',
      data: [
        {
          id: '0',
          title: 'FAQ',
          text: "Maybe we've already answered your question.Read our FAQs!",
          img: require('../assets/images/question.png'),
          border: false,
        },
        {
          id: '1',
          title: 'Live Chat',
          text: 'Get help from our awesome Customer Support team to resolve your queries instantly.',
          img: require('../assets/images/question.png'),
          border: true,
        },
      ],
    },
    {
      heading: 'Account',
      data: [
        {
          id: '0',
          title: 'Refer Friends',
          text: '',
          img: require('../assets/images/gift.png'),
          border: false,
        },
        {
          id: '1',
          title: 'Change country',
          text: 'Invest in Singapore,Malaysia and/or Indonesia',
          img: require('../assets/images/globe.png'),
          border: false,
        },
        {
          id: '2',
          title: 'Logout',
          text: '',
          img: require('../assets/images/logout.png'),
          border: true,
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <SectionList
        sections={Data}
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
              onPress={() =>
                item.title == 'Logout' ? handleLogoutPress() : null
              }>
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
    // </LinearGradient>
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
    //marginVertical: '2%',
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
