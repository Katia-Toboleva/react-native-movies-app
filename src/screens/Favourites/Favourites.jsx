import React from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import {useFavourites} from '../../context/FavouritesContext';
import {MovieCard} from '../Movies/Movies';
import styles from './Favourites.styles';

const Favourites = () => {
  const [favourites] = useFavourites();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favourites</Text>
      <FlatList
        data={favourites}
        renderItem={({item}) => (
          <MovieCard
            key={item.id}
            posterImage={item.posterImage}
            title={item.title}
            id={item.id}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Favourites;
