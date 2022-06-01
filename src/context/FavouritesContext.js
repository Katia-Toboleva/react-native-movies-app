import React, {createContext, useContext, useState} from 'react';

const FavouritesContext = createContext();

export const useFavourites = () => {
  return useContext(FavouritesContext);
};

export const FavouritesProvider = ({children}) => {
  const [favourites, setFavourites] = useState([]);

  return (
    <FavouritesContext.Provider value={[favourites, setFavourites]}>
      {children}
    </FavouritesContext.Provider>
  );
};
