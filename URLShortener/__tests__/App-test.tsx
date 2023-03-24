/**
 *
 */

import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

jest.mock('@react-native-clipboard/clipboard', () => {
  const mockClipboard = {
    setString: jest.fn(),
  };
  return mockClipboard;
});

jest.mock('../helpers/copyToClipboard', () => jest.fn());

test('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
