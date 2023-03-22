import {StyleSheet} from 'react-native';
import {Appearance} from 'react-native';
import {themeColors} from './theme';

const colorScheme = Appearance.getColorScheme();
const getThemeColor: string =
  colorScheme === 'light'
    ? themeColors.light.primary
    : themeColors.dark.primary;

const AppStyles = StyleSheet.create({
  container: {
    marginVertical: 30,
    padding: 15,
  },
  title: {
    fontSize: 30,
    color: getThemeColor,
  },
  copyIcon: {
    marginLeft: 'auto',
    marginRight: 10,
  },
});

export default AppStyles;
