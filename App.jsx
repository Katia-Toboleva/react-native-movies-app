import React from 'react';
import RouteContainer from './src/routes/RouteContainer';
import {AuthorizationProvider} from './src/context/AuthorizationContext';

const App = () => {
  return (
    <AuthorizationProvider>
      <RouteContainer />
    </AuthorizationProvider>
  );
};

export default App;
