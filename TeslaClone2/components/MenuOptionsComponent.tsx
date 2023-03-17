import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import {MenuOptionsProps} from '../types/types';

const MenuOptionsComponent = ({name, iconName}: MenuOptionsProps) => {
  return (
    <TouchableOpacity>
      <View style={styles.optionRow}>
        <Icon name={iconName} size={26} color="gray" />
        <Text style={styles.optionText}>{name}</Text>
        <Icon
          name="angle-right"
          size={24}
          color="gray"
          style={styles.optionIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  optionText: {
    color: '#eee',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  optionIcon: {
    marginLeft: 'auto',
  },
});

export default MenuOptionsComponent;
