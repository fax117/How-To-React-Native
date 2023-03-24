import {Appearance} from 'react-native';
import {themeColors} from '../styles/theme';

const getThemeColor = () => {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'light'
    ? themeColors.light.primary
    : themeColors.dark.primary;
};

export default getThemeColor;
