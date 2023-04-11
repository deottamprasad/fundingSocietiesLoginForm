import React, {useEffect, useState} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import PortfolioCardView from './PortfolioCardView';
import AnimatedLottieView from 'lottie-react-native';
//import {portfolioData} from '../assets/data/portfolioData';
import {fetchItem} from '../apiCalls/apiCalls';
type d = Array<{
  id: string;
  client?: string;
  status?: string;
  date?: string | undefined;
}>;
type SectionListItemType = {
  heading: string;
  data: d;
};
type SectionListDataType = Array<SectionListItemType>;

interface PropsType {
  any: boolean;
  ongoing: boolean;
  completed: boolean;
  defaulted: boolean;
  pressed: boolean[];
}

const PortfolioDetails = (props: PropsType) => {
  const [ANY, setANY] = useState<SectionListDataType>([]);
  const [ONGOING, seTONGOING] = useState<SectionListDataType>([]);
  const [COMPLETED, setCOMPLETED] = useState<SectionListDataType>([]);
  const [DEFAULTED, setDEFAULTED] = useState<SectionListDataType>([]);
  const [DATA, setDATA] = useState<SectionListDataType>([]);
  const filterData = (data: d) => {
    const anyData = data.filter(
      item => item.status === 'Investment in progress',
    );
    const completedData = data.filter(item => item.status === 'Successful');
    const ongoingData = data.filter(
      item =>
        item.status === 'Paid' ||
        item.status === 'In Progress' ||
        item.status === 'Partial',
    );
    const defaultedData = data.filter(item => item.status === 'Failed');
    return {
      AnyData: {
        heading: '',
        data: anyData,
      },
      OngoingData: {
        heading: 'Ongoing',
        data: ongoingData,
      },
      CompletedData: {
        heading: 'Completed',
        data: completedData,
      },
      DefaultedData: {
        heading: 'Defaulted',
        data: defaultedData,
      },
    };
  };
  const fetchItems = async () => {
    const portfolioData = await fetchItem();
    const data = filterData(portfolioData);
    setANY([
      data.AnyData,
      data.OngoingData,
      data.CompletedData,
      data.DefaultedData,
    ]);
    seTONGOING([data.OngoingData]);
    setCOMPLETED([data.CompletedData]);
    setDEFAULTED([data.DefaultedData]);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (props.any) {
      setDATA(ANY);
    } else if (props.ongoing) {
      setDATA(ONGOING);
    } else if (props.completed) {
      setDATA(COMPLETED);
    } else if (props.defaulted) {
      setDATA(DEFAULTED);
    }
  });

  return (
    <View style={styles.container}>
      <SectionList
        stickySectionHeadersEnabled={true}
        sections={DATA}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <PortfolioCardView
            id={item.id}
            status={item.status}
            date={item.date}
            client={item.client}
          />
        )}
        renderSectionHeader={({section: {heading, data}}) => {
          return data.length != 0 ? (
            heading === '' ? null : (
              <Text style={styles.header}>{heading}</Text>
            )
          ) : (
            <View
              style={{
                marginVertical: '20%',
                justifyContent: 'center',
              }}>
              <AnimatedLottieView
                style={{
                  alignSelf: 'center',
                  width: '70%',
                  marginBottom: '10%',
                }}
                source={require('../assets/json/empty.json')}
                autoPlay
                loop
              />
              <Text style={[styles.header, {textAlign: 'center'}]}>
                You don't have any {heading} investments in your portfolio
              </Text>
            </View>
          );
          // return heading === '' ? null : data.length != 0 ? (
          //   <Text style={styles.header}>{heading}</Text>
          // ) : heading !== '' ? (
          //   <View
          //     style={{
          //       marginVertical: '20%',
          //       justifyContent: 'center',
          //     }}>
          //     <AnimatedLottieView
          //       style={{
          //         alignSelf: 'center',
          //         width: '70%',
          //         marginBottom: '10%',
          //       }}
          //       source={require('../assets/json/empty.json')}
          //       autoPlay
          //       loop
          //     />
          //     <Text style={[styles.header, {textAlign: 'center'}]}>
          //       You don't have any {heading} investments in your portfolio
          //     </Text>
          //   </View>
          // ) : null;
        }}
      />
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
