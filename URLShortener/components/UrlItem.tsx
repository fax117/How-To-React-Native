import React from 'react';
import {View, Text} from 'react-native';
import PastURLsStyles from '../styles/PastURLsStyles';
import CopyButton from './CopyButton';

const UrlItem = ({
  short,
  original,
  testID,
}: {
  short: string;
  original: string;
  testID?: string;
}) => {
  return (
    <View style={PastURLsStyles.containerTable}>
      <View>
        <Text style={PastURLsStyles.shortSubtitle}>Short:</Text>
        <View style={PastURLsStyles.textContainer}>
          <Text style={PastURLsStyles.shortText}> {short}</Text>
          <CopyButton testID="short-copy-btn" stringToCopy={short} />
        </View>
      </View>
      <View>
        <Text style={PastURLsStyles.originalSubtitle}>Original:</Text>
        <View style={PastURLsStyles.textContainer}>
          <Text style={PastURLsStyles.originalText}> {original}</Text>
          <CopyButton testID="original-copy-btn" stringToCopy={original} />
        </View>
      </View>
    </View>
  );
};

export default UrlItem;
