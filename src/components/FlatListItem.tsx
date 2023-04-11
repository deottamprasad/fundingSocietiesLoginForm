import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

interface PropsType {
  id: string;
  date: string;
  money: string;
  action: string;
  status: string;
}

const FlatListItem = (props: PropsType) => {
  const [statusColor, setStatusColor] = useState<string>('white');
  useEffect(() => {
    switch (props.status) {
      case 'Confirm':
        setStatusColor('aqua');
        break;
      case 'Processing':
        setStatusColor('yellow');
        break;
      case 'Cancel':
        setStatusColor('red');
        break;
      case 'Pending':
        setStatusColor('yellow');
        break;
      default:
        setStatusColor('white');
    }
  });
  return (
    <View style={styles.itemView}>
      <View style={styles.firstCol}>
        <Text style={styles.dateMoneyText}>{props.date}</Text>
        <Text style={styles.actionStatusText}>{props.action}</Text>
      </View>
      <View style={styles.secondCol}>
        <View style={styles.moneyView}>
          <FontAwesomeIcon name="bitcoin" size={15} color="white" />
          <Text style={[styles.dateMoneyText, styles.dateText]}>
            {props.money}
          </Text>
          <AntDesignIcon name="right" size={12} color="white" />
        </View>
        <View style={styles.statusView}>
          <FontAwesomeIcon name="circle" size={8} color={statusColor} />
          <Text style={[styles.actionStatusText, styles.statusText]}>
            {props.status}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '4%',
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
  },
  firstCol: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  dateMoneyText: {
    fontSize: 15,
    color: 'white',
  },
  actionStatusText: {
    fontSize: 14,
    color: '#EBEBE3',
  },
  secondCol: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  moneyView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    marginRight: '2%',
    marginLeft: 1,
  },
  statusText: {
    marginLeft: '5%',
  },
});

export default FlatListItem;
