import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFavourites} from '../context/FavouritesContext';
import Movies from '../screens/Movies/Movies';
import Favourites from '../screens/Favourites/Favourites';
import AccountSettings from '../screens/AccountSettings/AccountSettings';
import Movie from '../screens/Movie/Movie';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
          tabBarLabel: 'Movies',
          tabBarIcon: ({color = '#fc037b', size = 20}) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          headerShown: false,
          tabBarLabel: 'Favourites',
          tabBarIcon: ({color = '#fc037b', size = 20}) => (
            <AntDesign name="heart" size={size} color={color} />
          ),
        }}      
      />
      <Tab.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{
          headerShown: false,
          tabBarLabel: 'AccountSettings',
          tabBarIcon: ({color = '#fc037b', size = 20}) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}  
      />
    </Tab.Navigator>
  );
};

export default AppContainer;
