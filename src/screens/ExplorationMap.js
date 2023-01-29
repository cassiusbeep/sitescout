import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import sample_icon from "../../assets/site-icon-2-01.png";
import getUserLocation from "../../functions/locationFunctions";
import { useEffect, useState } from "react";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function ExplorationMap({navigation}) {

  const [location, setLocation] = useState(null);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    (async () => {
      let loc = await getUserLocation();
      setLocation(loc.coords);
      setMarkers([loc.coords]);
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
                      latitude: val.latitude,
                      longitude: val.longitude
                      }}
                      key={index}
                      image={sample_icon}
                      onSelect={() => navigation.navigate('CampsitePage')}
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
  

  