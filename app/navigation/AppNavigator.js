import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Music from '../screens/Music';
import Player from '../screens/Player';
import FavouriteMusic from '../screens/FavouriteMusic';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
   <Tab.Navigator initialRouteName='Player' screenOptions={{headerShown: false}}>
    <Tab.Screen name='Music' component={Music} options={{
      tabBarIcon: ({size, color}) => (
        <Icon name='music' size={size} color={color} />
      )
    }} />
    <Tab.Screen name='Player' component={Player} options={{
      tabBarIcon: ({size, color}) => (
        <FontAwesome5 name='compact-disc' size={size} color={color} />
      )
    }}/>
    <Tab.Screen name='Favorite Music' component={FavouriteMusic} options={{
      tabBarIcon: ({size, color}) => (
        <MaterialCommunityIcons name='playlist-music' size={size} color={color} />
      )
    }}/>
   </Tab.Navigator>
  )
}

export default AppNavigator