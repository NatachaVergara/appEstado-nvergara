import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioScreen from '../Screen/user/InicioScreen';
import RegisterScreen from '../Screen/user/RegisterScreen';
import LoginScreen from '../Screen/user/LoginScreen';
import Colors from '../Constants/Colors';

const Stack = createNativeStackNavigator();

const AuthNavigator = () =>
(
    <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
            },

            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.secondary,
            headerTitleStyle: {
                fontWeight: 'bold',
                
            }
        }}
    >
        <Stack.Screen
            name="AuthScreen"
            component={InicioScreen}
            options={{
                title: 'Inicio'
            }}
        />
        <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
                title: 'Login'
            }}
        />
        <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
                title: 'Registro'
            }}
        />


    </Stack.Navigator>
)


export default AuthNavigator