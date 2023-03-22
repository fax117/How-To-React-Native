import {StyleSheet} from 'react-native';
import {Appearance} from 'react-native';
import {themeColors} from './theme';

const colorScheme = Appearance.getColorScheme();
const getThemeColor: string =
  colorScheme === 'light'
    ? themeColors.light.primary
    : themeColors.dark.primary;

const SUStyles = StyleSheet.create({
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: getThemeColor,
  },
  loader: {
    marginVertical: 20,
  },
  resURLContainer: {
    marginVertical: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  urlText: {
    color: getThemeColor,
    fontSize: 15,
    marginVertical: 30,
    marginRight: 50,
  },
  separationLine: {
    borderWidth: 1,
    borderColor: getThemeColor,
    marginBottom: 15,
  },
});

export default SUStyles;
