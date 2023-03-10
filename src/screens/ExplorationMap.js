import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {StyleSheet, Button, Pressable, View, SafeAreaView, Text, Alert, Modal, Image} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import icon0 from "../../assets/site-icon-0-01.png";
import icon1 from "../../assets/site-icon-1-01.png";
import icon2 from "../../assets/site-icon-2-01.png";
import icon3 from "../../assets/site-icon-3-01.png";
import getUserLocation, { getAllLocations } from "../../functions/locationFunctions";
import { useEffect, useState } from "react";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { getPhotoFromRef, filenameToUrl } from "../../functions/photoFunctions";

export default function ExplorationMap({navigation}) {

  const [markers, setMarkers] = useState([]);
  const [locImages, setLocImages] = useState([]);
  const [openedModal, setOpenedModal] = useState(-1);

  //TODO: check User location in range (how often check user location?)
  const [inRange, setInRange] = useState(false);

  useEffect(() => {
    (async () => {
      let locations = await (async () => {
        let locations = await getAllLocations();
        setMarkers(locations);
        return locations;
      })();
      if (locations.length > 0) {
        console.log(locations);
        let photos = await Promise.all(locations.map((loc, i) => {
          return getPhotoFromRef(loc["latest_image"]);
        }));
        setLocImages(photos);
      }
    })();
  }, []);

  function locationVerify(lon1, lat1, lon2, lat2) {
    meterToCoord = 1 / 111000.
    console.log(lon1);
    console.log(lat1);
    console.log(lon2);
    console.log(lat2);
    lat_cond = (lat2 - 50 * meterToCoord <= lat1) && (lat2 + 50 * meterToCoord >= lat1)
    lon_cond = (lon2 - 50 * meterToCoord <= lon1) && (lon2 + 50 * meterToCoord >= lon1)
    return lat_cond && lon_cond
  }

  async function checkIfInRange(loc) {
    console.log(loc);
    let user = await getUserLocation();
    let verification = locationVerify(parseFloat(loc.lon), parseFloat(loc.lat), user.coords.longitude, user.coords.latitude);
    console.log(verification);
    setInRange(verification);
  }

  function getIconByNum(num) {
    if (num > 7) {
      return icon3;
    } else if (num > 3) {
      return icon2;
    } else if (num > 1) {
      return icon1;
    } else {
      return icon0;
    }
  }

  async function refreshAll() {
    (async () => {
      let locations = await (async () => {
        let locations = await getAllLocations();
        setMarkers(locations);
        return locations;
      })();
      if (locations.length > 0) {
        console.log(locations);
        let photos = await Promise.all(locations.map((loc, i) => {
          return getPhotoFromRef(loc["latest_image"]);
        }));
        setLocImages(photos);
      }
    })();
  }

  return (
    <View style={styles.container}>
{locImages.map((val, index) => {
        return (
          <Modal
          key={`${val._id}-${index}`}
          style={{position: "absolute", bottom: "0%", left: "0%"}}
        animationType="fade"
        transparent={true}
        visible={openedModal == index}
        onDismiss={() => {
          setOpenedModal(-1);
          setInRange(false);
        }}
        onRequestClose={() => {
          setOpenedModal(-1);
          setInRange(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image source={{uri: val.public_url }} style={{width: "100%", height: "80%", marginBottom: "5%"}}/>
          <View style={{flexDirection: 'row'}}>
          {inRange? <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setOpenedModal(-1);
                setInRange(false);
                navigation.navigate('CampsitePage', { locationValue: markers[index] });}}>
              <Text style={styles.textStyle}>Join   </Text>
            </Pressable>: null}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setOpenedModal(-1);
                setInRange(false);
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
            </View>
          </View>
        </View>
      </Modal>
        )
      })}
      <MapView
        userInterfaceStyle="dark"
            style={{width: "100%", height: "100%"}}
            initialRegion={{
              latitude: 41.826190,
              longitude: -71.402475,
              latitudeDelta: 0.0072,
              longitudeDelta: 0.0051,
              }}
          >
      
            {markers.map((val, index) => {
              return (<Marker
                      coordinate={{
                      latitude: parseFloat(val.lat),
                      longitude: parseFloat(val.lon)
                      }}
                      key={`${val._id}-${index}`}
                      image={getIconByNum(val.num_images)}
                      onPress={async () => {
                        await checkIfInRange(val);
                        setOpenedModal(index);}}
                      // onPress={() => navigation.navigate('CampsitePage', { locationValue: val })}
                    />); 
            })}
      </MapView>
      <Pressable
        onPress={() => navigation.navigate('Photo Test', {uploadState: "NEW"})}>
        <Image source={require('../../assets/button-createpin-01.png')} style={styles.floatingCreate}/>
      </Pressable>
      <Pressable
        onPress={refreshAll}>
        <Image source={require('../../assets/button-refresh-1.png')} style={styles.floatingRefresh}/>
      </Pressable>
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
 },
  floatingCreate: {
    width: 50,  
    height: 50,   
    borderRadius: 30,                                           
    position: 'absolute', 
    bottom: 10,
    right: -175,
  },
  floatingRefresh: {
    width: 50,  
    height: 50,   
    borderRadius: 30,                                           
    position: 'absolute', 
    bottom: 10,
    left: -175,
  },
 centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 22,
},
modalView: {
  overflow: "hidden",
  width: "70%",
  height: "50%",
  backgroundColor: '#3A1600',
  borderRadius: 20,
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  margin: 5
},
buttonOpen: {
  backgroundColor: '#F194FF',
},
buttonClose: {
  backgroundColor: '#E34C00',
},
textStyle: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
},
});
  

  