import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../Constants/Colors';
import CartScreen from '../Screen/CartScreen';


const Stack = createNativeStackNavigator();

const CartNavigator = () => 
    (
        <Stack.Navigator initialRouteName="Cart"
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
                name='Cart'
                component={CartScreen}
                options={{
                    title: 'Carrito'
                }}

            />




        </Stack.Navigator>


    )

export default CartNavigator