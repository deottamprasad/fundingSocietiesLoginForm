import React from 'react';
import {View, Text, Linking, Image, StyleSheet, Share} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import BlueButton from '../components/BlueButton';

const ReferalScreen = () => {
  const onButtonPress = () => {
    Share.share({
      message: 'https://fundingsocieties.com/',
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require('../assets/images/handshake.png')}
          style={styles.img}
        />

        <Text style={styles.referText}>
          Funding Societies Refer a Friend Campaign , Get for You and Your
          Friend , Unlimiteed Referrals!
        </Text>
        <Text style={styles.qrText}>
          Scan the QR code or click on the button to visit our site
        </Text>
      </View>

      <View style={styles.qrView}>
        <QRCode
          size={150}
          value="https://fundingsocieties.com/"
          logo={require('../assets/images/fs_logo.png')}
          logoSize={30}
          logoBackgroundColor="white"
        />
      </View>
      <Text style={styles.or}>OR</Text>
      <BlueButton onPress={onButtonPress}>Share</BlueButton>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00264D',
    alignItems: 'center',
  },
  imgContainer: {
    alignItems: 'center',
    margin: '5%',
  },

  img: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    resizeMode: 'center',
    height: 110,
    width: 110,
    borderRadius: 150,
  },
  referText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: '5%',
  },
  qrView: {
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: 'white',
  },
  qrText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    paddingVertical: '5%',
  },
  or: {
    color: 'white',
    textAlign: 'center',
    margin: '10%',
    // marginTop: '10%',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ReferalScreen;
