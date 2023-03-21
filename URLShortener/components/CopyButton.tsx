import React from 'react';
import {TouchableOpacity} from 'react-native';
import copyToClipboard from '../helpers/copyToClipboard';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AppStyles from '../styles/AppStyles';

const CopyButton = ({stringToCopy}: {stringToCopy: string}) => {
  return (
    <TouchableOpacity onPress={() => copyToClipboard(stringToCopy)}>
      <Icon style={AppStyles.copyIcon} name="copy" size={24} />
    </TouchableOpacity>
  );
};

export default CopyButton;
