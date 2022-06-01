import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {getPopularMovies} from '../../api/movies';
import styles from './Movies.styles';

export const MovieCard = ({id, posterImage, title}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Movie', {id})}>
      <View style={styles.movieColumnContainer}>
        <Image
          style={styles.movieColumnImage}
          source={{
            uri: posterImage,
          }}
        />
        <Text style={styles.movieTitle}>{title}</Text>
      </View>
    </Pressable>
  );
};

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    setTimeout(async () => {
      const fetchedPopularMovies = await getPopularMovies();
      setPopularMovies(fetchedPopularMovies);
    }, 1000);
  };

  const Loader = () => (
    <View style={styles.loader}>
      <Text>Getting the movies...</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>MOST POPULAR MOVIES</Text>
      {!popularMovies.length ? (
        <Loader />
      ) : (
        <FlatList
          data={popularMovies}
          renderItem={({item}) => (
            <MovieCard
              key={item.id}
              posterImage={item.posterImage}
              title={item.title}
              id={item.id}
            />
          )}
          horizontal
        />
      )}
    </SafeAreaView>
  );
};

export default Movies;
