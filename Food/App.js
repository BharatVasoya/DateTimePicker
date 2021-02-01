require('react-native').unstable_enableLogBox();

import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
  );
}

export default App;
