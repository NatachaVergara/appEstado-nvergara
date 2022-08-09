import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import ShopNavigator from './ShopNavigator'

import CarritoNavigator from './CarritoNavigator';
import OrdersNavigator from './OrdersNavigator';
// import AuthNavigator from './AuthNavigator';



const BottomsTabs = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <BottomsTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}>

            {/* <BottomsTabs.Screen
                name='AuthTab'
                component={AuthNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.IconContainer}>
                            <MaterialIcons name='home' style={styles.icon} />
                        </View>
                    ),
                    tabBarStyle: { display: "none" }
                }}

            /> */}

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




            <BottomsTabs.Screen
                name="CarritoTab"
                component={CarritoNavigator}
                options={{
                    tabBarIcon: () => (
                        <View style={styles.IconContainer}>
                            <Ionicons name='md-cart' style={styles.icon} />
                        </View>
                    )
                }}
            />




            <BottomsTabs.Screen
                name='OrdersTab'
                component={OrdersNavigator}
                options={{
                    tabBarIcon: () => (
                        <View styles={styles.IconContainer}>
                            <Ionicons name='library-outline' style={styles.icon} />
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