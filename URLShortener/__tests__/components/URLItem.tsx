import React from 'react';
import {render} from '@testing-library/react-native';
import UrlItem from '../../components/UrlItem';

jest.mock('@react-native-clipboard/clipboard', () => {
  const mockClipboard = {
    setString: jest.fn(),
  };
  return mockClipboard;
});

jest.mock('../../helpers/copyToClipboard', () => jest.fn());

describe('UrlItem', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const short = 'https://short.com';
  const original = 'https://example.com/api/heregoessomething/loremipsum';

  it('Renders the short and original URLs', () => {
    const {getByText} = render(<UrlItem short={short} original={original} />);
    expect(getByText('Short:')).toBeTruthy();
    expect(getByText(short)).toBeTruthy();
    expect(getByText('Original:')).toBeTruthy();
    expect(getByText(original)).toBeTruthy();
  });
});
