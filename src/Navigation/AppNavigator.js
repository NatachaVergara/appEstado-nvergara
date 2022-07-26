import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screen/Home';
import Login from '../Screen/Login';
import Register from '../Screen/Register';
import Start from '../Screen/Start';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
            <Stack.Screen name="Start" component={Start} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default AppNavigator