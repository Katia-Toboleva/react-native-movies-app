import React from 'react';
import {Text, SafeAreaView, Pressable} from 'react-native';
import {useAuthorization} from '../../context/AuthorizationContext';
import styles from './AccountSettings.styles';

const AccountSettings = () => {
  const [_, setIsAuthorized] = useAuthorization();

  const logoutUser = () => {
    setIsAuthorized(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={{...styles.button, ...styles.logoutButton}}
        title="Login"
        onPress={logoutUser}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default AccountSettings;
