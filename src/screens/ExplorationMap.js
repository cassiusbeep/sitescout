import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from "react-native-maps";
import sample_icon from "../../assets/site-icon-2-01.png";
import getUserLocation from "../../functions/locationFunctions";
import { useEffect, useState } from "react";

export default function ExplorationMap() {

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
  

  