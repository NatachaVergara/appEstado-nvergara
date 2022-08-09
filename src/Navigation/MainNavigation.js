import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

const MainNavigation = () => {
    const [isUser, setIsUser] = useState(false)

    return (
        <NavigationContainer>
            {isUser ? <TabNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default MainNavigation