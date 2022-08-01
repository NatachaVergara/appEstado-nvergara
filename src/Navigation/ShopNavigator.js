import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AutoresScreen from '../Screen/AutoresScreen';
import LibrosXAutorScreen from '../Screen/LibrosXAutorScreen';
import LibroDetailSCreen from '../Screen/LibroDetailSCreen';



const Stack = createNativeStackNavigator();


const ShopNavigator = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home"
                component={AutoresScreen}
                options={{
                    title: 'Autores'
                }} />

            <Stack.Screen
                name='LibrosxAutor'
                component={LibrosXAutorScreen}
                options={({ route }) => ({
                    title: route.params.autor
                })}
            />
            <Stack.Screen
                name='Detalle'
                component={LibroDetailSCreen}
                options={({ route }) => ({
                    title: route.params.libro.titulo
                })}
            />


        </Stack.Navigator>

    )
}

export default ShopNavigator