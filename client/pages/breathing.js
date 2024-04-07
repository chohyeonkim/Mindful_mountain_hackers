import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image, ScrollView} from 'react-native';

const Breathing = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getActivities = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/breathing/');

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

  return (
    <View style={{ alignItems: 'center', padding: 15 }}>
    {data ? (
      <View>
        <Text style={{color: '#ededed', fontSize: 24, fontFamily: 'Cochin', paddingTop: 30, alignSelf: 'center'}}>{data.name}</Text>
        <Text style={{color: '#ededed', fontSize: 18, fontFamily: 'Cochin', paddingTop: 30, alignSelf: 'center'}}>Difficulty: {data.description}</Text>
        <Text style={{color: '#ededed', fontSize: 18, fontFamily: 'Cochin', paddingTop: 30, alignSelf: 'center'}}>Duration: {data.duration_minutes}</Text>
      </View>
    ) : (
      <ActivityIndicator />
    )}
  </View>
      );

};

export default Breathing;
