import React from 'react';
import {FlatList, View, Text} from 'react-native';
import UrlItem from './UrlItem';
import {ApiUrl} from '../types/types';
import PastURLsStyles from '../styles/PastURLsStyles';

const PastURLs = ({urlsToDisplay}: {urlsToDisplay: ApiUrl[]}) => {
  return (
    <View>
      <Text style={PastURLsStyles.title}>Recently shortened URLs</Text>
      {urlsToDisplay ? (
        <FlatList
          testID="flat-list"
          data={urlsToDisplay}
          removeClippedSubviews
          horizontal
          persistentScrollbar
          renderItem={({item}) => {
            return (
              <UrlItem
                testID="url-item"
                short={item.short}
                original={item.original}
              />
            );
          }}
        />
      ) : (
        <Text>No URLs to display</Text>
      )}
    </View>
  );
};

export default PastURLs;
