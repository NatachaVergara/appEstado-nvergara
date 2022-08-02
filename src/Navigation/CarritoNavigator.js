import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../Constants/Colors';
import CarritoScreen from '../Screen/CarritoScreen';


const Stack = createNativeStackNavigator();

const CarritoNavigator = () => 
    (
        <Stack.Navigator initialRouteName="Carrito"
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

            <Stack.Screen
                name='Carrito'
                component={CarritoScreen}
                options={{
                    title: 'Carrito'
                }}

            />




        </Stack.Navigator>


    )

export default CarritoNavigator