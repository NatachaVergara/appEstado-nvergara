import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../Screen/Inicio';
import RegisterScreen from '../Screen/RegisterScreen';
import LoginScreen from '../Screen/LoginScreen';
import Colors from '../Constants/Colors';

const Stack = createNativeStackNavigator();

const InicioNavigator = () =>
(
    <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
            },

            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.secondary,
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}
    >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />


    </Stack.Navigator>
)


export default InicioNavigator