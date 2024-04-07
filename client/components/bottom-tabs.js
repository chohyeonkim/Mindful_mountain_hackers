import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View, ViewStyle, SafeAreaView,
  ScrollView} from 'react-native';
// import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import InteractiveMap from './pages/interactive-map';
import HikeList from '../pages/hike-list';

const Tab = createBottomTabNavigator();

// ACTIVITIES TAB
const ActivitiesStack = () => {
  return (
    <Stack.Navigator initialRouteName='ActivitiesScreen' screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='ActivitiesScreen' component={ActivitiesScreen}/>
      <Stack.Screen name='HikingScreen' component={HikingScreen}/>
    </Stack.Navigator>
  );
}

function ActivitiesScreen({navigation}) {
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
          <Pressable style={({pressed}) => {return {opacity: pressed ? 0.75 : 1}}} onPress={() => navigation.navigate('HikingScreen')}>
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

// HIKING MAP WHEN YOU CLICK HIKING BUTTON
function HikingScreen({navigation}) {
  return <HikeList />
}

function MapScreen({navigation}) {
  return(
    <InteractiveMap />
  )

}


// MINDFULNESS TAB
function MindfulnessScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <View style={{alignContent: 'center', alignSelf: 'center', alignItems: 'center'}}>
        <Image 
        source={require('./images/logo.png')}
         style={{width:150, height:150}}
         />
      </View>

      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', padding: 30}}>
        Let's take a moment to be mindful!
      </Text>

      <BigSeperator/>

      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', paddingTop: 30, alignSelf: 'center'}}>
        Quote of the day:
      </Text>

      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', paddingBottom: 30}}>
        AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
      </Text>

      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', paddingTop: 30, alignSelf: 'center'}}>
        Stretch of the day: YAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
      </Text>

      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', paddingBottom: 30}}>
        YAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
      </Text>


        </ScrollView>
     </SafeAreaView>
      
    </View>
  );
}


const StretchesStack = () => {
  return (
    <Stack.Navigator initialRouteName='StretchesScreen' screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name='StretchesScreen' component={StretchesScreen}/>
      <Stack.Screen name='IndividualStretchScreen' component={IndividualStretchScreen}/>
    </Stack.Navigator>
  );
}

// STRETCHES TAB
function StretchesScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
      <View>
        <Image 
        source={require('./images/logo.png')}
        style={{width:150, height:150, alignSelf: 'center'}}
        />
      </View>

      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin'}}>
        Hi! Let's stretch together!
      </Text>
      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', paddingBottom: 30, textAlign: 'center'}}>
        Scroll through the muscles below and pick a stretch!
      </Text>
      
      <BigSeperator/>

      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', paddingTop: 30, paddingBottom: 20}}>
        PUT TITLE OF MUSCLE HERE
      </Text>

      <SmallSeperator/>

    {/* // STRETCH NAMES LIST
    MuscleList.forEach(muscle) => {
      
    }); */}
      <Pressable style={{paddingTop: 20}} onPress={() => navigation.navigate('IndividualStretchScreen', {info:'1st stretch info here'})}>
        <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', paddingBottom: 30}}>
        1st stretch 
      </Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('IndividualStretchScreen', {info: '2nd stretch info here'})}>
        <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', paddingBottom: 30}}>
        2nd stretch 
      </Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('IndividualStretchScreen', {info: '3rd stretch info here'})}>
        <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', paddingBottom: 30}}>
        3rd stretch 
      </Text>
      </Pressable>
      </ScrollView>
     </SafeAreaView>
    </View>
  );
}



function IndividualStretchScreen({navigation, route}) {
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>
      <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', paddingBottom: 30}}>
      {"YAY " + route.params.info}
    </Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
  smallSeparator: {
  height: 2, 
  width: '25%',
  backgroundColor: "#ededed",
  alignSelf: 'center',
  alignContent: 'center'
  }, 
  bigSeparator: {
    height: 4, 
    width: '80%',
    backgroundColor: "#ededed", 
    alignSelf: 'center',
    alignContent: 'center'
    }
});

const BigSeperator = () => <View style={styles.bigSeparator}/>

const SmallSeperator = () => <View style={styles.smallSeparator}/>

const Stack = createNativeStackNavigator();

// const MuscleList = [biceps, calves, chest, forearms, glutes, hamstrings];

export default function MyTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Activities" component={ActivitiesStack} />
        <Tab.Screen name="Mindfulness" component={MindfulnessScreen} />
        <Tab.Screen name="Stretches" component={StretchesStack} />
        <Tab.Screen name="Map" component={MapScreen}/>
      </Tab.Navigator>
    );
  }