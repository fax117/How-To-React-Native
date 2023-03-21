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
  },
  containerTable: {
    marginVertical: 15,
    borderWidth: 1,
    borderColor: '#fff',
    padding: 15,
  },
  textContainer: {
    marginVertical: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  shortSubtitle: {
    color: '#FFF',
    fontSize: 20,
  },
  originalSubtitle: {
    color: '#FFF',
    fontSize: 20,
  },
  shortText: {
    color: '#FFF',
    fontSize: 10,
    marginRight: 50,
  },
  originalText: {
    color: '#FFF',
    fontSize: 10,
    marginRight: 50,
  },
});

export default PastURLsStyles;
