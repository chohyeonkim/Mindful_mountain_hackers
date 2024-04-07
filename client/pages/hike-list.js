import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, ScrollView} from 'react-native';
import { Pressable, StyleSheet, TouchableOpacity, ViewStyle, SafeAreaView} from 'react-native';

const HikeList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getActivities = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/activity/hiking/');

      const json = await response.json();
      console.log(json);
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  const trailsArray = Object.values(data);

  return (
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000'}}>
    <ScrollView contentContainerStyle={{ alignItems: 'left', padding: 15 }}>
        <Text style = {{ fontFamily: 'Cochin', fontSize: 35, color: '#ededed' }}>Check out the amazing hiking trails in BC! 🏔️ </Text>
          {trailsArray.map((trail, index) => (
            <View key={index}>
              <Text style={{ fontFamily: 'Cochin', fontSize: 24, paddingTop: 30, color: '#ededed' }}>{trail.Title}</Text>
              <Text style={{ fontFamily: 'Cochin', color: '#ededed' }}>Difficulty: {trail.difficulty}</Text>
              <Text style={{ fontFamily: 'Cochin', color: '#ededed' }}>Duration: {trail.time}</Text>
              <Text style={{ fontFamily: 'Cochin', color: '#ededed' }}>Season: {trail.season}</Text>
              <Text style= {{ fontFamily: 'Cochin', paddingBottom: 30 }}>Region: {trail.region}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      );

};

export default HikeList;
