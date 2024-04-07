import React from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

const INITIAL_REGION = {
    latitude: 49.316666,
    longitude: -123.066666,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5
}

// Array of hiking trials in metro Vancouver
const markers = [
    {
        latitude: 49.25355454572173,
        longitude: -123.21555606138196,
        name: "Pacific Spirit Park"
    },
    {
        latitude: 49.304608181367385,
        longitude: -123.14399470796069,
        name: "Stanley Park"
    },
    {
        latitude: 49.33465738603537,
        longitude: -122.93638834741463,
        name: "Quarry Rock"
    },
    {
        latitude: 49.363643625022746,
        longitude: -123.02897617292345,
        name: "Lynn Headwaters Regional Park"
    },
    {
        latitude: 49.4905417231644,
        longitude: -123.23739354902942,
        name: "Tunnel Bluffs"
    }
]

const renderMarkers = () => {
    return markers.map((marker, index) => (
         <Marker
           key={index}
           coordinate={marker}
         >
          <Callout>
            <View>
              <Text style={{ textAlign: 'center'}}>{marker.name}</Text>
            </View>
            <Button
            //   onPress={onPressLearnMore}
              color="#013220"
              title="Learn More" />
          </Callout>
        </Marker>
       ));
     };

export default function InteractiveMap() {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        >
        {renderMarkers()}
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});