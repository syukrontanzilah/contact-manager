import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { AddContact, Edit, Home, KodeQR, Profile, Search, Splash } from '../pages';

const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="AddContact" component={AddContact} />
            <Stack.Screen name="Edit" component={Edit} />
            <Stack.Screen name="KodeQR" component={KodeQR} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})
