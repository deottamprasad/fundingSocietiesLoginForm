import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

interface PropsType {
  id: string | undefined;
  status?: string;
  date?: string;
  client?: string;
}

const PortfolioCardView = (props: PropsType) => {
  const statusIcon = (status: string | undefined) => {
    if (status == 'Paid')
      return (
        <View
          style={{
            backgroundColor: '#00cc88',
            borderRadius: 5,
            padding: '2.5%',
          }}>
          <Text style={{color: 'white', fontSize: 12}}>{status}</Text>
        </View>
      );
    else if (status == 'Partial')
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: 'red',
            borderRadius: 5,
            padding: '2.5%',
          }}>
          <Text style={{color: 'red', fontSize: 12}}>{status}</Text>
        </View>
      );
    else
      return (
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ffcc00',
            borderRadius: 5,
            paddingHorizontal: '2.5%',
            paddingVertical: '2%',
          }}>
          <Text style={{color: '#ffcc00', fontSize: 12}}>{status}</Text>
        </View>
      );
  };
  const month = (date: string) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return months[parseInt(date.substring(5, 7)) - 1];
  };
  const date = (date: string) => {
    return date.substring(8) + ' ' + month(date) + ' ' + date.substring(0, 4);
  };
  return (
    <View>
      {props.id && (
        <View style={[styles.itemView, {height: props.date ? 150 : 110}]}>
          <View style={[styles.itemTopView, {flex: props.date ? 1 : 2}]}>
            <View style={styles.idView}>
              <Text style={{color: 'white'}}>{props.id}</Text>
              <Text style={{color: 'rgba(255,255,255,0.5)', fontSize: 12}}>
                {props.client}
              </Text>
            </View>
            <View style={styles.moneyView}>
              <FontAwesomeIcon
                name="bitcoin"
                size={16}
                color="white"
                style={{paddingRight: 2}}
              />
              <Text style={{color: 'white', fontWeight: '500'}}>10000.00</Text>
              <AntDesignIcon name="right" size={14} color="white" />
            </View>
          </View>
          <View style={styles.itemBottomView}>
            {props.date && (
              <View style={styles.repaymentView}>
                <Text style={{color: 'rgba(255,255,255,0.9)', fontSize: 12}}>
                  {month(props.date)} repayment date
                </Text>
                <Text style={{color: 'rgba(255,255,255,0.6)', fontSize: 12}}>
                  {date(props.date)}
                </Text>
              </View>
            )}
            {props.date && (
              <View style={styles.statusView}>
                <Text style={{color: 'rgba(255,255,255,0.9)', fontSize: 12}}>
                  {month(props.date)} status
                </Text>
                {statusIcon(props.status)}
              </View>
            )}
            {!props.date && (
              <View style={{flexDirection: 'row-reverse'}}>
                <Text style={{color: 'rgba(255,255,255,0.6)'}}>
                  {props.status}
                </Text>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  itemView: {
    backgroundColor: 'rgba(255,255,255,0.13)',
    marginHorizontal: '2%',
    marginVertical: '1.5%',
    borderRadius: 10,
  },
  itemTopView: {
    flexDirection: 'row',
    flex: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    borderBottomWidth: 1,
    paddingHorizontal: '4%',
    justifyContent: 'space-between',
    paddingVertical: '3%',
  },
  idView: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
  },
  moneyView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  itemBottomView: {
    flex: 1,
    paddingHorizontal: '4%',
    paddingVertical: '3%',
  },
  repaymentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '1%',
  },
  statusView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1%',
  },
  header: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 19,
    fontWeight: '600',
    marginHorizontal: '5%',
    marginVertical: '2%',
    position: 'relative',
  },
});
export default PortfolioCardView;
