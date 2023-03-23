import React from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';
import AppStyles from './styles/AppStyles';
import ShortenURL from './components/ShortenURL';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={AppStyles.container}>
          <Text style={AppStyles.title}>URL Shortener</Text>
          <ShortenURL />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
