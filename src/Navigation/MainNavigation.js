import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}

export default MainNavigation