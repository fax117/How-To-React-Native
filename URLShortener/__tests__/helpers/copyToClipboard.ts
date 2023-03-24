import Clipboard from '@react-native-clipboard/clipboard';
import copyToClipboard from '../../helpers/copyToClipboard';

jest.mock('@react-native-clipboard/clipboard', () => {
  const mockClipboard = {
    setString: jest.fn(),
  };
  return mockClipboard;
});

test('copyToClipboard sets the correct string', () => {
  const stringToCopy = 'test string';
  copyToClipboard(stringToCopy);
  expect(Clipboard.setString).toHaveBeenCalledWith(stringToCopy);
});
