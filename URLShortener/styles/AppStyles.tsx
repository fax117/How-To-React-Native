import {StyleSheet} from 'react-native';
import getThemeColor from '../helpers/getThemeColor';

const AppStyles = StyleSheet.create({
  container: {
    marginVertical: 30,
    padding: 15,
  },
  title: {
    fontSize: 30,
    color: getThemeColor(),
  },
  copyIcon: {
    marginLeft: 'auto',
    marginRight: 10,
  },
});

export default AppStyles;
