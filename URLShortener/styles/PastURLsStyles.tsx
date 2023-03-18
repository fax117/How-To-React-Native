import {StyleSheet} from 'react-native';

const PastURLsStyles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontSize: 30,
  },
  container: {
    marginVertical: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerTable: {
    flexDirection: 'column',
    marginVertical: 15,
    justifyContent: 'space-evenly',
  },
  shortSubtitle: {
    color: '#FFF',
    fontSize: 15,
  },
  originalSubtitle: {
    color: '#FFF',
    fontSize: 15,
    marginLeft: 'auto',
  },
  shortText: {
    color: '#FFF',
    fontSize: 10,
  },
  originalText: {
    color: '#FFF',
    fontSize: 10,
  },
});

export default PastURLsStyles;
