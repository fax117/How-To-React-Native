import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

const Controls = () => {
  return (
    <View style={styles.controls}>
      <Icon name="lock" size={26} color="gray" />
      <Icon5 name="fan" size={26} color="gray" />
      <Icon name="bolt" size={26} color="gray" />
      <Icon5 name="car" size={26} color="gray" />
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Controls;
