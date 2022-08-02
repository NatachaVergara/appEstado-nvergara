import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AutoresScreen from '../Screen/AutoresScreen';
import LibrosScreen from '../Screen/LibrosScreen';
import LibroDetailSCreen from '../Screen/LibroDetailSCreen';



const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="AutoresScreen"
                component={AutoresScreen}
                options={{
                    title: 'Autores'
                }} />

            <Stack.Screen
                name='LibrosScreen'
                component={LibrosScreen}
                options={({ route }) => ({
                    title: route.params.autor
                })}
            />
            <Stack.Screen
                name='LibroDetalleScreen'
                component={LibroDetailSCreen}
                options={({ route }) => ({
                    title: route.params.libro.titulo
                })}
            />


        </Stack.Navigator>

    )
}

export default ShopNavigator