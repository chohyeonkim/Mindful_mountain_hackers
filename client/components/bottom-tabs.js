import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InteractiveMap from '../pages/interactive-map';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import InteractiveMap from '../pages/interactive-map';

const Tab = createBottomTabNavigator();

function ActivitiesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#000000' }}>
      <View>
          <Image 
          source={require('./images/logo.png')}
          style={{width:150, height:150}}
          />
      </View>

      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin'}}>
        What activity are you interested in?
      </Text>
      
      {/* activity buttons */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{padding: 20}}>
          <Pressable style={({pressed}) => {return {opacity: pressed ? 0.75 : 1}}}>
            <Image 
            source={require('./images/hiking.png')}
            style={{width: 150, height: 150, borderWidth: 3, borderColor: '#ededed'}} />
          </Pressable>
        </View>

        <View style={{padding: 20}}>
        <Pressable style={({pressed}) => {return {opacity: pressed ? 0.75 : 1}}}>
          <Image 
          source={require('./images/boarding.png')}
          style={{width: 150, height: 150, borderWidth: 3, borderColor: '#ededed'}} />
        </Pressable>
        </View>

      </View>
      
      {/* second row */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{padding: 20}}>
          <Pressable style={({pressed}) => {return {opacity: pressed ? 0.75 : 1}}}>
            <Image 
            source={require('./images/climbing.png')}
            style={{width: 150, height: 150, borderWidth: 3, borderColor: '#ededed'}} />
          </Pressable>
        </View>

        <View style={{padding: 20}}>
        <Pressable style={({pressed}) => {return {opacity: pressed ? 0.75 : 1}}}>
          <Image 
          source={require('./images/running.png')}
          style={{width: 150, height: 150, borderWidth: 3, borderColor: '#ededed'}} />
        </Pressable>
        </View>

      </View>
      
    </View>
  );
}

function MindfulnessScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>

      <View>
        <Image 
        source={require('./images/logo.png')}
         style={{width:150, height:150}}
         />
      </View>

      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin'}}>
        Be mindful!
        </Text>
    </View>
  );
}

function StretchesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }}>

      <View>
        <Image 
        source={require('./images/logo.png')}
        style={{width:150, height:150}}
        />
      </View>


      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin'}}>
        Let's stretch together!
      </Text>
    </View>
  );
}

function MapScreen() {
  return (
    <InteractiveMap />
  )
}

export default function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Activities" component={ActivitiesScreen} />
        <Tab.Screen name="Mindfulness" component={MindfulnessScreen} />
        <Tab.Screen name="Stretches" component={StretchesScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    );
  }