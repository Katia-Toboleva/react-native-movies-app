import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import styles from './Movie.styles';
import {useRoute} from '@react-navigation/native';
import {getIndividualMovie} from '../../api/movies';
import {useFavourites} from '../../context/FavouritesContext';

const Movie = () => {
  const [favourites, setFavourites] = useFavourites();
  const {params} = useRoute();
  const [movie, setMovie] = useState({});
  const isAddedToFav = favourites.find(i => i.id === movie.id);

  useEffect(() => {
    fetchIndividualMovie(params.id);
  }, [params]);

  const fetchIndividualMovie = async movieId => {
    const individualMovie = await getIndividualMovie(movieId);
    setMovie(individualMovie);
  };

  const handleFavouritesPress = favMovie => {
    const movieIndex = favourites.findIndex(m => m.id === favMovie.id);

    if (!favourites.length || movieIndex === -1) {
      const newFav = [...favourites, favMovie];
      setFavourites(newFav);
    } else {
      const newFav = favourites.filter(i => i.id !== movie.id);
      setFavourites(newFav);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.bannerImageContainer}>
          <Image
            source={{uri: movie.bannerImage}}
            style={styles.bannerImageStyle}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.mainDetails}>
            <Image
              source={{uri: movie.posterImage}}
              style={styles.posterImageStyle}
            />
            <View>
              <Text style={styles.bold}>{movie.title}</Text>
              <Text>{movie.duration}</Text>
              <Pressable
                style={
                  isAddedToFav
                    ? {...styles.favButton, ...styles.buttonAddedToFav}
                    : {...styles.favButton, ...styles.buttonToAddToFav}
                }
                onPress={() => handleFavouritesPress(movie)}>
                <Text style={styles.bold}>
                  {isAddedToFav ? 'Your favourite' : 'Add to favourites'}
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.additionalDetails}>
            <View style={styles.horizontal}>
              <Text style={styles.bold}>Release date: </Text>
              <Text>{movie.releaseDate}</Text>
            </View>
            <View style={styles.horizontal}>
              <Text style={styles.bold}>Director: </Text>
              <Text>{movie.director}</Text>
            </View>
            <View style={styles.horizontal}>
              <Text style={styles.bold}>Box Office: </Text>
              <Text>{movie.boxOffice}</Text>
            </View>
          </View>
          <View style={styles.additionalDetails}>
            <Text style={styles.bold}>STORYLINE</Text>
            <Text style={{marginBottom: 20}}>{movie.storyline}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movie;
