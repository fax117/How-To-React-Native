import React from 'react';
import {render} from '@testing-library/react-native';
import PastURLs from '../../components/PastURLs';
import {ApiUrl} from '../../types/types';

jest.mock('@react-native-clipboard/clipboard', () => {
  const mockClipboard = {
    setString: jest.fn(),
  };
  return mockClipboard;
});

jest.mock('../../helpers/copyToClipboard', () => jest.fn());

//jest.mock('../../components/UrlItem.tsx', () => jest.fn());

describe('PastURLs', () => {
  const urls: ApiUrl[] = [
    {short: 'short1', original: 'http://example.com/1'},
    {short: 'short2', original: 'http://example.com/2'},
    {short: 'short3', original: 'http://example.com/3'},
  ];

  it('Displays a Flatlist component', () => {
    const {getByTestId} = render(<PastURLs urlsToDisplay={urls} />);
    const flatList = getByTestId('flat-list');
    expect(flatList).toBeTruthy();
  });
  /*
  it('Displays the empty list component when there are no URLs', () => {
    console.log(rend);
    expect(rend.getByTestId('empty-list')).toBeTruthy();
  });*/

  /*
  it('Does not render any URL items when urlsToDisplay is undefined', () => {
    const {queryAllByTestId} = render(<PastURLs />);
    expect(queryAllByTestId('url-item')).toHaveLength(0);
  });

  it('Does not render any URL items when urlsToDisplay is empty', () => {
    const {queryAllByTestId} = render(<PastURLs urlsToDisplay={[]} />);
    expect(queryAllByTestId('url-item')).toHaveLength(0);
  });

  it('Renders the correct number of URL items', () => {
    const {getAllByTestId} = render(<PastURLs urlsToDisplay={urls} />);
    expect(getAllByTestId('url-item')).toHaveLength(urls.length);
  });

  /*it('displays the correct URL information', () => {
    const {getAllByText} = render(<PastURLs urlsToDisplay={urls} />);
    urls.forEach(({short, original}) => {
      expect(getAllByText(short)).toBeTruthy();
      expect(getAllByText(original)).toBeTruthy();
    });
  });

  */
});
