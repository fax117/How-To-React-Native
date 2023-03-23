import React from 'react';
import copyToClipboard from '../../helpers/copyToClipboard';
import {render, fireEvent} from '@testing-library/react-native';
import CopyButton from '../../components/CopyButton';

jest.mock('@react-native-clipboard/clipboard', () => {
  const mockClipboard = {
    setString: jest.fn(),
  };
  return mockClipboard;
});

jest.mock('../../helpers/copyToClipboard', () => jest.fn());

describe('CopyButton', () => {
  const stringToCopy = 'Hello World';

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render a TouchableOpacity', () => {
    const {getByTestId} = render(<CopyButton stringToCopy={stringToCopy} />);
    const touchableOpacity = getByTestId('copy-button');
    expect(touchableOpacity).not.toBeNull();
  });

  it('Should call copyToClipboard when TouchableOpacity is pressed', () => {
    const {getByTestId} = render(<CopyButton stringToCopy={stringToCopy} />);
    const touchableOpacity = getByTestId('copy-button');
    fireEvent.press(touchableOpacity);
    expect(copyToClipboard).toHaveBeenCalledWith(stringToCopy);
  });

  it('Should render an Icon with name "copy"', () => {
    const {getByTestId} = render(<CopyButton stringToCopy={stringToCopy} />);
    const icon = getByTestId('copy-icon');
    expect(icon.props.children[0]).toEqual('');
  });
});
