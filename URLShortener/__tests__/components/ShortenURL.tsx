import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import ShortenURL from '../../components/ShortenURL';

jest.mock('../../helpers/postRequest.ts');

jest.mock('@react-native-clipboard/clipboard', () => {
  const mockClipboard = {
    setString: jest.fn(),
  };
  return mockClipboard;
});

jest.mock('../../helpers/copyToClipboard', () => jest.fn());

describe('ShortenURL', () => {
  it('Should display error message if no URL is entered', async () => {
    const {getByTestId, getByText} = render(<ShortenURL />);
    const shortenBtn = getByTestId('shorten-btn');

    fireEvent.press(shortenBtn);

    await waitFor(() => {
      expect(getByText('Error')).toBeTruthy();
      expect(getByText('Please enter a URL')).toBeTruthy();
    });
  });

  /*it('Should display error message if an invalid URL is entered', async () => {
    const {getByTestId, getByText} = render(<ShortenURL />);
    const input = getByTestId('input');
    const shortenBtn = getByTestId('shorten-btn');

    fireEvent.changeText(input, 'not_a_url');
    fireEvent.press(shortenBtn);

    await waitFor(() => {
      expect(getByText('Error')).toBeTruthy();
      expect(getByText('Please enter a valid URL')).toBeTruthy();
    });
  });

  it('Should display the shortened URL when a valid URL is entered and the "Shorten URL" button is pressed', async () => {
    const {getByTestId, getByText} = render(<ShortenURL />);
    const input = getByTestId('input');
    const shortenBtn = getByTestId('shorten-btn');

    fireEvent.changeText(input, 'https://example.com');
    fireEvent.press(shortenBtn);

    await waitFor(() => {
      expect(getByText('Your short URL goes here')).toBeFalsy();
      expect(getByTestId('res-url-container')).toBeTruthy();
      expect(getByText('https://short.com')).toBeTruthy();
      expect(getByTestId('copy-btn')).toBeTruthy();
    });
  });*/
});
