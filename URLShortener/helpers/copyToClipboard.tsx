import Clipboard from '@react-native-clipboard/clipboard';

const copyToClipboard = (stringToCopy: string) => {
  Clipboard.setString(stringToCopy);
};

export default copyToClipboard;
