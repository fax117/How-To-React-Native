import {StyleSheet} from 'react-native';
import getThemeColor from '../helpers/getThemeColor';

const PastURLsStyles = StyleSheet.create({
  title: {
    color: getThemeColor(),
    fontSize: 30,
  },
  container: {
    marginVertical: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerTable: {
    width: 350,
    margin: 15,
    borderWidth: 1,
    borderColor: getThemeColor(),
    padding: 15,
  },
  textContainer: {
    marginVertical: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  shortSubtitle: {
    color: getThemeColor(),
    fontSize: 20,
  },
  originalSubtitle: {
    color: getThemeColor(),
    fontSize: 20,
  },
  shortText: {
    color: getThemeColor(),
    fontSize: 10,
    marginRight: 50,
  },
  originalText: {
    color: getThemeColor(),
    fontSize: 10,
    marginRight: 50,
  },
});

export default PastURLsStyles;
