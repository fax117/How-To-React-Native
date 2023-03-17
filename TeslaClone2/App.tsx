import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import carImage from './assets/images/car.png';

import menuOptions from './components/menuOptions';
import MenuOptionsComponent from './components/MenuOptionsComponent';
import Controls from './components/Controls';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>My Model S</Text>
          <Text style={styles.subtitle}>Parked</Text>
        </View>
        <Icon name="user" size={30} color="grey" />
      </View>
      <View>
        <Image style={styles.carImage} source={carImage} resizeMode="contain" />
      </View>
      <FlatList
        data={menuOptions}
        ListHeaderComponent={Controls}
        renderItem={({item}) => (
          <MenuOptionsComponent iconName={item.iconName} name={item.name} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818',
  },
  logo: {
    width: 66,
    height: 58,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: '#eee',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: 'gray',
    fontWeight: '500',
  },
  carImage: {
    width: '100%',
    height: 300,
  },
});

export default App;
