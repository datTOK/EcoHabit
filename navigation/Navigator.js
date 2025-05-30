import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EndowScreen from '../screens/EndowScreen';
import MapScreen from '../screens/MapScreen';
import PostScreen from '../screens/PostScreen';
import HomeScreen from '../screens/HomeScreen';
import BlogPage from '../screens/BlogScreen';
import BlogDetailScreen from '../screens/BlogDetailScreen';
import GreenJourneyScreen from '../screens/GreenJourneyScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import PostDetailScreen from '../screens/PostDetailScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: route.name !== 'Home',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = size;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            iconSize = 40;
            return (
              <View style={styles.homeIconWrapper}>
                <Ionicons name={iconName} size={iconSize} color="#08B14A" />
              </View>
            );
          } else if (route.name === 'Post') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Endow') {
            iconName = focused ? 'gift' : 'gift-outline';
          } else if (route.name === 'Map') {
            iconName = focused ? 'map' : 'map-outline';
          } else if (route.name === 'Blog') {
            iconName = focused ? 'book' : 'book-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#08B14A',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 65,
          paddingBottom: 5,
          paddingTop: 5,
        },
      })}
    >
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Endow" component={EndowScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Blog" component={BlogPage} />
    </Tab.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainTabs" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="BlogDetail" component={BlogDetailScreen} options={{ title: 'Blog Details' }} />
        <Stack.Screen name="GreenJourney" component={GreenJourneyScreen} />
        <Stack.Screen name="Post" component={PostScreen} options={{ title: 'Post Details' }} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
        <Stack.Screen name="PostDetail" component={PostDetailScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeIconWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 40,
    padding: 10,
    marginTop: -20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
});
