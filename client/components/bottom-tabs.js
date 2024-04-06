import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function ActivitiesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Check out all your activities!</Text>
    </View>
  );
}

function MindfulnessScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Be mindful!</Text>
    </View>
  );
}

function StretchesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Let's stretch together!</Text>
    </View>
  );
}

export default function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Activities" component={ActivitiesScreen} />
        <Tab.Screen name="Mindfulness" component={MindfulnessScreen} />
        <Tab.Screen name="Stretches" component={StretchesScreen} />
      </Tab.Navigator>
    );
  }