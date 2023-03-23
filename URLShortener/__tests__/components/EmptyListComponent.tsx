import React from 'react';
import {render} from '@testing-library/react-native';
import EmptyListComponent from '../../components/EmptyListComponent';

describe('EmptyListComponent', () => {
  it('Renders correctly', () => {
    const {getByText} = render(<EmptyListComponent />);
    expect(getByText('Your Past URLs go here.')).toBeTruthy();
  });
});
