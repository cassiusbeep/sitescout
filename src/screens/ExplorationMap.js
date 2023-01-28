import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from "react-native-maps";
import thing from "../../assets/favicon.png";

export default function ExplorationMap() {

  return (
    <View style={styles.container}>
      <Text>Hello world!</Text>
  <MapView
            style={{width: "100%", height: "100%"}}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              }}
          >
          <Marker
          coordinate = {{latitude: 37.78825,longitude: -122.4324}}
          image={thing}/></MapView>
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
  

  