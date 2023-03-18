import React from 'react';
import {Text, View} from 'react-native';
import AppStyles from './styles/AppStyles';
import ShortenURL from './components/ShortenURL';

const App = () => {
  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.title}>URL Shortener</Text>
      <ShortenURL />
    </View>
  );
};

export default App;
