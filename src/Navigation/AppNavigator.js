import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../Screen/Inicio';
import Home from '../Screen/Home';
import Register from '../Screen/Register';
import Login from '../Screen/Login';
import Colors from '../Constants/Colors';





const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.primary : '',
                    },

                    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.secondary,
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    }
                }}>
                <Stack.Screen name="Inicio" component={Inicio} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Home" component={Home}
                options={{
                    title:'Libros'
                }}
                
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default AppNavigator