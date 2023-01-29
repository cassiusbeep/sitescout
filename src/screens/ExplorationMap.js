import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {StyleSheet, Button, Pressable, View, SafeAreaView, Text, Alert} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import icon1 from "../../assets/site-icon-1-01.png";
import icon2 from "../../assets/site-icon-2-01.png";
import icon3 from "../../assets/site-icon-3-01.png";
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
      console.log(locations);
      setMarkers(locations);
    })();
  }, []);

  function getIconByNum(num) {
    if (num > 7) {
      return icon3;
    } else if (num > 3) {
      return icon2;
    } else {
      return icon1;
    }
  }

  return (
    <View style={styles.container}>

    {/* <Pressable 
    style={styles.navButton}
    onPress={() => navigation.navigate('CampsitePage')}>
      <Text style={styles.navButton}>Sit by the fireside</Text></Pressable> */}
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
              console.log(index);
              console.log(val);
              return (<Marker
                      coordinate={{
                      latitude: parseFloat(val.lat),
                      longitude: parseFloat(val.lon)
                      }}
                      key={index}
                      image={getIconByNum(val.num_images)}
                      onPress={() => navigation.navigate('CampsitePage', { locationValue: val })}
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
  navButton: {
    backgroundColor: '#e34c00',
    borderColor: 'red',
    color: '#ffffff',
    padding: 3, 
    marginTop: 16,     
 }
});
  

  