import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import sample_icon from "../../assets/site-icon-2-01.png";
import getUserLocation, { getAllLocations } from "../../functions/locationFunctions";
import { useEffect, useState } from "react";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function ExplorationMap({navigation}) {

  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    (async () => {
      let locations = await getAllLocations();
      setMarkers(locations);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Button
      title="Sit around the fire"
      onPress={() => navigation.navigate('CampsitePage')}
      color='#e34c00'
    />
      <MapView
        userInterfaceStyle="dark"
            style={{width: "100%", height: "100%"}}
            initialRegion={{
              latitude: 41.826190,
              longitude: -71.402475,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              }}
          >
            {markers.map((val, index) => {
              return (<Marker
                      coordinate={{
                      latitude: val.lat,
                      longitude: val.lon
                      }}
                      key={index}
                      image={sample_icon}
                      onPress={() => navigation.navigate('CampsitePage', { val })}
                    />); 
            })}
      </MapView>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
  

  