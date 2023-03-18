import React from 'react';
import {View, Text} from 'react-native';
import PastURLsStyles from '../styles/PastURLsStyles';

const UrlItem = ({short, original}: {short: string; original: string}) => {
  return (
    <View style={PastURLsStyles.containerTable}>
      <View>
        <Text style={PastURLsStyles.shortText}>Short: {short}</Text>
      </View>
      <View>
        <Text style={PastURLsStyles.originalText}>Original: {original}</Text>
      </View>
    </View>
  );
};

export default UrlItem;
