import React from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {View, Modal} from 'react-native';

const ActivityLoader = () => {
  return (
    <Modal transparent={true}>
      <AnimatedLottieView
        style={{
          flex: 1,
          opacity: 0.9,
          backgroundColor: 'rgba(0,0,0,0.4)',
          alignSelf: 'center',
        }}
        source={require('../assets/json/logo.json')}
        autoPlay
        loop
      />
    </Modal>
  );
};

export default ActivityLoader;
