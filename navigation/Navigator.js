import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EndowScreen from '../screens/EndowScreen';
import MapScreen from '../screens/MapScreen';
import PostScreen from '../screens/PostScreen';
import HomeScreen from '../screens/HomeScreen';
import BlogPage from '../screens/BlogScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: route.name !== 'Home', // hide label for Home only
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let iconSize = size;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                            iconSize = 40; // make it larger
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
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    homeIconWrapper: {
        backgroundColor: '#ffffff',
        borderRadius: 40,
        padding: 10,
        marginTop: -20, // makes it float above tab bar
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
});
