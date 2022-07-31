import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from '../Screen/Inicio';
import Register from '../Screen/Register';
import Login from '../Screen/Login';
import Colors from '../Constants/Colors';
import AutoresScreen from '../Screen/AutoresScreen';
import LibrosXAutor from '../Screen/LibrosXAutor';





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
                <Stack.Screen name="Home" component={AutoresScreen}
                    options={{
                        title: 'Libros por autor'
                    }} />

                <Stack.Screen
                    name='LibrosxAutor'
                    component={LibrosXAutor}
                    options={({ route }) => ({
                        options: route.params.autor
                    })}
                />


            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default AppNavigator