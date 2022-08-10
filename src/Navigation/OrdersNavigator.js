import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../Constants/Colors';
import OrdersScreen from '../Screen/OrdersScreen';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Orders'
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
                name='orders'
                component={OrdersScreen} 
                options={{
                    title: 'Ordenes realizadas'
                }}
            />

        </Stack.Navigator>
    )
}
export default OrdersNavigator