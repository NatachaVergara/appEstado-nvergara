import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DirYFactScreen from '../Screen/checkout/DirYFactScreen';
import PagosScreen from '../Screen/checkout/PagosScreen';
import FinalizarCompra from '../Screen/checkout/FinalizarCompra';


const Stack = createNativeStackNavigator();


const CheckoutNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Checkout'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false
            }}
        >
            <Stack.Screen
                name='DireccionFacturacion'
                component={DirYFactScreen}
                option={{
                    title: 'Direccion y facturacion'
                }}
            />
            <Stack.Screen
                name='PagoConfirmacion'
                component={PagosScreen}
                options={{
                    title: 'Dirección y Facturación'
                }}
            />

            <Stack.Screen
                name='FinalizarCompra'
                component={FinalizarCompra}
                options={{
                    title: 'Finalizar Compra'
                }}

            />
        </Stack.Navigator >
    )
}

export default CheckoutNavigator