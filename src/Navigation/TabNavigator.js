import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { StyleSheet, Text, View } from 'react-native'
import ShopNavigator from './ShopNavigator'
import InicioNavigator from './InicioNavigator'



const BottomsTabs = createBottomTabNavigator()
const TabNavigator = () => {
    return (
        <BottomsTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}>

            <BottomsTabs.Screen
                name='Inicio'
                component={InicioNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.IconContainer}>
                            <MaterialIcons name='home' style={styles.icon} />
                        </View>
                    ),
                    tabBarStyle: { display: "none" }
                }}

            />

            <BottomsTabs.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.IconContainer}>
                            <MaterialIcons name='storefront' style={styles.icon} />
                        </View>
                    )
                }}
            />


        </BottomsTabs.Navigator>




    )
}




const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        height: 50,
    },
    IconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24
    },
    icon: {
        fontSize: 30
    }
});
export default TabNavigator