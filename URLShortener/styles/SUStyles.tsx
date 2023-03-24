import {StyleSheet} from 'react-native';
import getThemeColor from '../helpers/getThemeColor';

const SUStyles = StyleSheet.create({
  input: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: getThemeColor(),
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
    color: getThemeColor(),
    fontSize: 15,
    marginVertical: 30,
    marginRight: 50,
  },
  separationLine: {
    borderWidth: 1,
    borderColor: getThemeColor(),
    marginBottom: 15,
  },
});

export default SUStyles;
