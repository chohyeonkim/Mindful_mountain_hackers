import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './components/bottom-tabs';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
      );
}
