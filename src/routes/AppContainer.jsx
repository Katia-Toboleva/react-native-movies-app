import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFavourites} from '../context/FavouritesContext';
import Movies from '../screens/Movies/Movies';
import Favourites from '../screens/Favourites/Favourites';
import AccountSettings from '../screens/AccountSettings/AccountSettings';
import Movie from '../screens/Movie/Movie';
// import {MaterialCommunityIcons} from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppContainer = () => {
  const [favourites, setFavourites] = useFavourites();

  const MovieStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Movie" component={Movie} />
      </Stack.Navigator>
    );
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="MoviesTab"
        component={MovieStack}
        options={{
          headerShown: false,
          // tabBarLabel: 'MoviesTab',
          // tabBarIcon: ({color = '#fc037b', size = 20}) => (
          //   <Icon name="md-checkmark-circle" size={size} color={color} />
          // ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default AppContainer;
