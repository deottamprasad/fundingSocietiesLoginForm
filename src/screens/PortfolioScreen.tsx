import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  RefreshControl,
  ScrollView,
} from 'react-native';
import PortfolioDetails from '../components/PortfolioDetails';
import ActivityLoader from '../components/ActivityLoader';
const titleData = [
  {index: 0, title: 'Any', img: require('../assets/images/portfolio/box.png')},
  {
    index: 1,
    title: 'Ongoing',
    img: require('../assets/images/portfolio/reload.png'),
  },
  {
    index: 2,
    title: 'Completed',
    img: require('../assets/images/portfolio/checked.png'),
  },
  {
    index: 3,
    title: 'Defaulted',
    img: require('../assets/images/portfolio/calendar.png'),
  },
];
const PortfolioScreen = () => {
  const [pressed, setPressed] = useState([true, false, false, false]);
  const [loader, setloader] = useState(false);
  const onButtonPress = (index: number) => {
    if (index == 0) setPressed([true, false, false, false]);
    else if (index == 1) setPressed([false, true, false, false]);
    else if (index == 2) setPressed([false, false, true, false]);
    else if (index == 3) setPressed([false, false, false, true]);
  };

  useEffect(() => {
    setloader(true);
    setTimeout(() => {
      setloader(false);
    }, 1000);
  }, [JSON.stringify(pressed)]);
  return (
    <View style={styles.container}>
      {loader && <ActivityLoader />}
      <FlatList
        style={{flex: 1, marginHorizontal: '2%'}}
        horizontal
        data={titleData}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={pressed[item.index] ? 1 : 0.2}
            style={[
              styles.titleItem,
              {
                backgroundColor: pressed[item.index]
                  ? '#3E7EFF'
                  : 'rgba(255,255,255,0.15)',
              },
            ]}
            onPress={() => onButtonPress(item.index)}>
            <View style={styles.titleView}>
              <Image
                style={[
                  styles.titleImg,
                  {opacity: pressed[item.index] ? 1 : 0.3},
                ]}
                source={item.img}
              />
              <Text
                style={[
                  styles.title,
                  {
                    color: pressed[item.index]
                      ? 'white'
                      : 'rgba(255,255,255,0.4)',
                  },
                ]}>
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.index.toString()}
      />
      <View style={{flex: 6}}>
        {!loader && (
          <PortfolioDetails
            any={pressed[0]}
            ongoing={pressed[1]}
            completed={pressed[2]}
            defaulted={pressed[3]}
            pressed={pressed}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00264D',
  },
  titleItem: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'space-evenly',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 3,
    height: 80,
    width: 120,
  },
  titleView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  titleImg: {
    resizeMode: 'stretch',
    height: '30%',
    width: '20%',
  },
  title: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 15,
  },
});

export default PortfolioScreen;
