import React from 'react';
import {TouchableOpacity} from 'react-native';
import copyToClipboard from '../helpers/copyToClipboard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppStyles from '../styles/AppStyles';

const CopyButton = ({
  stringToCopy,
  testID,
}: {
  stringToCopy: string;
  testID?: string | undefined;
}) => {
  return (
    <TouchableOpacity
      testID="copy-button"
      onPress={() => copyToClipboard(stringToCopy)}>
      <Icon
        testID="copy-icon"
        style={AppStyles.copyIcon}
        name="copy"
        size={24}
      />
    </TouchableOpacity>
  );
};

export default CopyButton;
