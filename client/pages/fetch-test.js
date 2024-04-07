import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Image} from 'react-native';

const FetchTest = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getActivities = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/activities/trails_6/');

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
              <Text style={{ fontSize: 24 }}>{data.Title}</Text>
              {data && data.image && data.image[0] && <Image source={{ uri: data.image[0] }} />}
              <Text>Difficulty: {data.difficulty}</Text>
              <Text>Duration: {data.time}</Text>
              <Text>Details: {data.details}</Text>
            </View>
          ) : (
            <ActivityIndicator />
          )}
        </View>
      );

};

export default FetchTest;
