import {Appearance} from 'react-native';
import {themeColors} from '../../styles/theme';
import getThemeColor from '../../helpers/getThemeColor';

describe('getThemeColor', () => {
  it('Should return the light theme color when colorScheme is light', () => {
    jest.spyOn(Appearance, 'getColorScheme').mockReturnValueOnce('light');
    expect(getThemeColor()).toBe(themeColors.light.primary);
  });

  it('Should return the dark theme color when colorScheme is dark', () => {
    jest.spyOn(Appearance, 'getColorScheme').mockReturnValueOnce('dark');
    expect(getThemeColor()).toBe(themeColors.dark.primary);
  });
});
