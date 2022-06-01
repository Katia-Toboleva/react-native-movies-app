import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  bannerImageContainer: {
    resizeMode: 'contain',
  },
  bannerImageStyle: {
    height: 350,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  infoContainer: {
    padding: 20,
  },
  mainDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: -70,
  },
  posterImageStyle: {
    height: 200,
    width: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  horizontal: {
    flexDirection: 'row',
  },
  bold: {
    fontWeight: 'bold',
  },
  additionalDetails: {
    marginBottom: 20,
  },
  favButton: {
    alignItems: 'center',
    padding: 5,
    marginTop: 8,
  },
  buttonAddedToFav: {
    backgroundColor: '#ccc',
  },
  buttonToAddToFav: {
    backgroundColor: 'yellow',
  },
});

export default styles;
