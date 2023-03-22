/**
 * I had some issues testing the copy to clipboard helper...
 */
/*
import copyToClipboard from '../../helpers/copyToClipboard';

const mockClipboard = require('../../__mocks__/@react-native-clipboard/clipboard-mock');

jest.mock('../dist/index.js', () => mockClipboard);

describe('mockClipboard', () => {
  const {getString, useClipboard} = require('copyToClipboard');

  it('can get mock string', async () => {
    const result = await getString();
    const expected = 'mockString';
    expect(result).toBe(expected);
  });

  it('can get useClipboardHook', async () => {
    const [result] = useClipboard();
    const expected = 'mockString';
    expect(result).toBe(expected);
  });
});
*/

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
