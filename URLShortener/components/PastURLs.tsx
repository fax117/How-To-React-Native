import React from 'react';
import {FlatList, View, Text} from 'react-native';
import UrlItem from './UrlItem';
import {ApiUrl} from '../types/types';
import PastURLsStyles from '../styles/PastURLsStyles';
import EmptyListComponent from './EmptyListComponent';

const PastURLs = ({urlsToDisplay}: {urlsToDisplay?: ApiUrl[]}) => {
  return (
    <View>
      <Text style={PastURLsStyles.title}>Recently shortened URLs</Text>
      <FlatList
        data={urlsToDisplay}
        removeClippedSubviews
        horizontal
        persistentScrollbar
        // eslint-disable-next-line react/no-unstable-nested-components
        ListEmptyComponent={() => <EmptyListComponent />}
        renderItem={({item}) => (
          <UrlItem short={item.short} original={item.original} />
        )}
      />
    </View>
  );
};

export default PastURLs;
