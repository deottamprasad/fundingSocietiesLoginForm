import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import PortfolioCardView from './PortfolioCardView';
import AnimatedLottieView from 'lottie-react-native';
import {portfolioData as abc} from '../assets/data/portfolioData';
interface Data {
  heading: string;
  data: {
    index: string;
    id?: string | undefined;
    user?: string;
    status?: string;
    month?: string;
    date?: string;
    x?: string;
  }[];
}
const anyData: Data = {
  heading: '',
  data: [
    {
      index: '0',
      id: 'TPBT-23030095',
      user: 'Edgard',
      status: 'Investment in progress',
    },
    {
      index: '1',
      id: 'TPBT-22040002',
      user: 'Edgard',
      status: 'Investment in progress',
    },
  ],
};
const ongoingData: Data = {
  heading: 'Ongoing',
  data: [
    {
      index: '0',
      id: 'TPBBTL-23030001',
      user: 'RFID SG OP',
      status: 'Paid',
      month: 'Apr',
      date: '1 Apr 2023',
    },
    {
      index: '1',
      id: 'TPBT-23020003',
      user: 'Sang Weng',
      status: 'In Progress',
      month: 'Mar',
      date: '15 Mar 2023',
    },
    {
      index: '2',
      id: 'TPBT-23010010',
      user: 'Tom yum goong',
      status: 'Partial',
      month: 'Jan',
      date: '19 Jan 2023',
    },
    {
      index: '3',
      id: 'TPBBTL-23030001',
      user: 'RFID SG OP',
      status: 'Paid',
      month: 'Apr',
      date: '1 Apr 2023',
    },
    {
      index: '4',
      id: 'TPBT-23020003',
      user: 'Sang Weng',
      status: 'In Progress',
      month: 'Mar',
      date: '15 Mar 2023',
    },
  ],
};
const completedData: Data = {
  heading: 'Completed',
  data: [
    {index: '0', id: 'TPBT-1001', user: 'Yaw Hua', status: 'Successful'},
    {index: '1', id: 'TPBT-1001', user: 'Yaw Hua', status: 'Successful'},
    {index: '2', id: 'TPBT-1001', user: 'Yaw Hua', status: 'Successful'},
    {index: '3', id: 'TPBT-1001', user: 'Yaw Hua', status: 'Successful'},
    {index: '4', id: 'TPBT-1001', user: 'Yaw Hua', status: 'Successful'},
    {index: '5', id: 'TPBT-1001', user: 'Yaw Hua', status: 'Successful'},
    {index: '6', id: 'TPBT-1001', user: 'Yaw Hua', status: 'Successful'},
  ],
  // data: [
  //   {
  //     index: '-1',
  //     x: "You don't have any completed investments in your portfolio",
  //   },
  // ],
};
const defaultedData: Data = {
  heading: 'Defaulted',
  // data: [{index: '0', id: 'TPBT-9009', user: 'Ping Pang', status: 'failed'}],
  //data: [{index: '0'}],
  data: [
    {
      index: '-1',
      x: "You don't have any defaulted investments in your portfolio",
    },
  ],
};

interface PropsType {
  any: boolean;
  ongoing: boolean;
  completed: boolean;
  defaulted: boolean;
}

const PortfolioDetails = (props: PropsType) => {
  var d1: Data = {heading: '1', data: []};
  var d2 = {heading: '2', data: []};
  var d3 = {heading: '3', data: []};
  var d4 = {heading: '4', data: []};
  const filterFunction = () => {
    //  d1.data.push(abc.filter((value)=>{if(value.status=='Successful')}))
  };
  // console.log(d1);

  var DATA = [
    ...[anyData],
    ...[ongoingData],
    ...[completedData],
    ...[defaultedData],
  ];
  {
    if (props.ongoing) DATA = [...[ongoingData]];
    else if (props.completed) DATA = [...[completedData]];
    else if (props.defaulted) DATA = [...[defaultedData]];
  }
  // console.log(DATA[0].data);
  //console.log(DATA[0]);
  return (
    <View style={styles.container}>
      {DATA[0].data[0].index !== '-1' ? (
        <SectionList
          stickySectionHeadersEnabled={true}
          sections={DATA}
          keyExtractor={item => item.index}
          renderItem={({item}) => (
            <PortfolioCardView
              id={item.id}
              status={item.status}
              month={item.month}
              date={item.date}
              user={item.user}
            />
          )}
          renderSectionHeader={({section: {heading, data}}) =>
            data[0].index != '-1' && heading !== '' ? (
              <Text style={styles.header}>{heading}</Text>
            ) : null
          }
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <AnimatedLottieView
              style={{alignSelf: 'center', width: '50%'}}
              source={require('../assets/json/empty.json')}
              autoPlay
              loop
            />
            <Text style={[styles.header, {textAlign: 'center'}]}>
              {DATA[0].data[0].x}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: '2%',
    //marginTop: '3%',
  },
  header: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 19,
    fontWeight: '600',
    // marginHorizontal: '5%',
    // marginVertical: '2%',
    paddingHorizontal: '5%',
    paddingTop: '2%',
    paddingBottom: '2.5%',
    position: 'relative',
    backgroundColor: '#00264D',
  },
});

export default PortfolioDetails;
