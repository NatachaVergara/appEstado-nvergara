import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AutoresScreen from '../Screen/AutoresScreen';
import LibroDetailSCreen from '../Screen/LibroDetailSCreen';
import CategoriaScreen from '../Screen/CategoriaScreen';
import InicioShopScreen from '../Screen/InicioShopScreen';
import FilteredByCategoryScreen from '../Screen/FilteredByCategoryScreen';
import FilteredByAutor from '../Screen/FilteredByAutor';



const Stack = createNativeStackNavigator();


const ShopNavigator = () => {

    return (

        <Stack.Navigator>
            <Stack.Screen
                name='InicioShopScreen'
                component={InicioShopScreen}
                options={{
                    title: 'Shop'
                }}
            />

            <Stack.Screen
                name="AutoresScreen"
                component={AutoresScreen}
                options={{
                    title: 'Autores'
                }} />

            <Stack.Screen
                name='CategoriaScreen'
                component={CategoriaScreen}
                options={{
                    title: 'Categoria'
                }}
            />

            <Stack.Screen
                name='FilteredByAutor'
                component={FilteredByAutor}
                options={({ route }) => ({
                    title: route.params.autor
                })}
            />


            <Stack.Screen
                name='FilteredByCategoryScreen'
                component={FilteredByCategoryScreen}
                options={({ route }) => ({
                    title: route.params.categoria
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