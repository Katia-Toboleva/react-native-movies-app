import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  movieColumnContainer: {
    alignItems: 'center',
    flex: 0,
  },
  movieColumnImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    padding: 20,
  },
  loader: {
    width: '100%',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default styles;
