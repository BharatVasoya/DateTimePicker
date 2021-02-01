import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../../src/screens/Spash';
import Home from '../../src/screens/Home';
import { Color } from '../../src/common/styles';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{  }}>
            <Stack.Screen name='Splash' component={Splash} options={{ title: 'Splash', headerShown: false, }} />
            <Stack.Screen name='Home' component={Home} options={{ title: 'Set Pickup Time', gestureEnabled: false, headerShown: true, headerStyle: {backgroundColor: Color.BLUE,},headerTintColor: '#ffffff', }}/>
        </Stack.Navigator>
    );
}

export default AppNavigator;