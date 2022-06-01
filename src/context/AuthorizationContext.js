import React, {useContext, useState} from 'react';

const AuthorizationContext = React.createContext();

export const useAuthorization = () => {
  return useContext(AuthorizationContext);
};

export const AuthorizationProvider = ({children}) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <AuthorizationContext.Provider value={[isAuthorized, setIsAuthorized]}>
      {children}
    </AuthorizationContext.Provider>
  );
};
