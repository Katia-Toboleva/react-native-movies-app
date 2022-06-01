import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthorization} from '../context/AuthorizationContext';
import {FavouritesProvider} from '../context/FavouritesContext';

import AppContainer from './AppContainer';
import AuthContainer from './AuthContainer';

const RouteContainer = () => {
  const [isAuthorized, setIsAuthorized] = useAuthorization();

  return (
    <NavigationContainer>
      {isAuthorized ? (
        <FavouritesProvider>
          <AppContainer />
        </FavouritesProvider>
      ) : (
        <AuthContainer />
      )}
    </NavigationContainer>
  );
};

export default RouteContainer;
