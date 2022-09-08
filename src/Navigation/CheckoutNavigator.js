import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DirYFactScreen from '../Screen/checkout/DirYFactScreen';
import PagosScreen from '../Screen/checkout/PagosScreen';
import FinalizarCompra from '../Screen/checkout/FinalizarCompra';
import UserScreen from '../Screen/user/UserScreen';
import InicioShopScreen from '../Screen/InicioShopScreen';
import PagoRealizadoExito from '../Screen/Confirmacion/PagoRealizadoExito';


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


            <Stack.Screen
                name='confirmacion'
                component={PagoRealizadoExito}

            />

            <Stack.Screen
                name='PerfilUsuario'
                component={UserScreen}
                options={{
                    title: 'Perfil de usuario'
                }}
            />

            <Stack.Screen
                name='InicioShopScreen'
                component={InicioShopScreen}
                options={{
                    title: 'Shop'
                }}
            />

        </Stack.Navigator >
    )
}

export default CheckoutNavigator