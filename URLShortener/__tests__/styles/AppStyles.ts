import {Appearance} from 'react-native';
import {themeColors} from '../../styles/theme';
import AppStyles from '../../styles/AppStyles';

// Mock the Appearance module
jest.mock('react-native', () => ({
  getColorScheme: jest.fn(),
}));

describe('AppStyles', () => {
  beforeEach(() => {
    jest.resetModules(); // Reset the module cache before each test
  });

  it('Should use light theme color when colorScheme is light', () => {
    jest.spyOn(Appearance, 'getColorScheme').mockReturnValueOnce('light');
    expect(AppStyles.title.color).toBe(themeColors.light.primary);
  });

  it('Should use dark theme color when colorScheme is dark', () => {
    jest.spyOn(Appearance, 'getColorScheme').mockReturnValueOnce('dark');
    expect(AppStyles.title.color).toBe(themeColors.dark.primary);
  });
});
