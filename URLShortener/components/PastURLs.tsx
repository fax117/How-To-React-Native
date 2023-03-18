import React from 'react';
import {FlatList, View, Text} from 'react-native';
import UrlItem from './UrlItem';
import {ApiUrl} from '../types/types';
import PastURLsStyles from '../styles/PastURLsStyles';

const PastURLs = ({urlsToDisplay}: {urlsToDisplay?: ApiUrl[]}) => {
  return (
    <View>
      <Text style={PastURLsStyles.title}>Recently shortened URLs</Text>
      <View style={PastURLsStyles.container}>
        <Text style={PastURLsStyles.shortSubtitle}>Short</Text>
        <Text style={PastURLsStyles.originalSubtitle}>Original</Text>
      </View>

      <FlatList
        data={urlsToDisplay}
        renderItem={({item}) => (
          <UrlItem short={item.short} original={item.original} />
        )}
      />
    </View>
  );
};

export default PastURLs;
