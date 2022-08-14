import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../Constants/Colors';
import UserScreen from '../Screen/user/UserScreen';

const Stack = createNativeStackNavigator();

const UserNavigator = () => (
    <Stack.Navigator
        initialRouteName='PerfilUsuario'
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
            name='PerfilUsuario'
            component={UserScreen}
            options={{
                title: 'Perfil de usuario'
            }}
        />




    </Stack.Navigator>

)


export default UserNavigator