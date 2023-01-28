import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function ExplorationMap() {

  return (
    <View>
      <Text>Hello world!</Text>
  <MapView
            provider={PROVIDER_GOOGLE}
            style={{flex:1, width: "100%", height: "100%"}}
          />
</View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
  

  