import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView, Pressable} from 'react-native';
import {useAuthorization} from '../../context/AuthorizationContext';

import styles from './Login.styles';

const Login = () => {
  const [_, setIsAuthorized] = useAuthorization();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginUser = () => {
    if (email && password) {
      setIsAuthorized(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Welcome to MyMovies</Text>
        <Text style={styles.subtitle}>
          Find the best selection of movies here
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={styles.formField}
            textContentType="emailAddress"
            placeholder="Your email"
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.formField}
            textContentType="password"
            placeholder="Your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.formButtonContainer}>
          <Pressable
            style={
              !email || !password
                ? {...styles.button, ...styles.loginButtonDisabled}
                : {...styles.button, ...styles.loginButton}
            }
            title="Login"
            disabled={!email || !password}
            onPress={loginUser}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
