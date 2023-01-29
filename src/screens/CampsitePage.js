import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Dimensions, Pressable, ScrollView, Animated} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import sample_icon from "../../assets/site-icon-2-01.png";
import getUserLocation, { getAllPhotos } from "../../functions/locationFunctions";
import { useEffect, useState } from "react";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SmokeMessages from "../../functions/smokeFunction.mjs";
import PhotoUploadPage from './PhotoUploadPage';
import { getCollageFromRef } from "../../functions/photoFunctions";

const screenHeight = Dimensions.get('window').height;

export default function CampsitePage({route, navigation}) {
  const { locationValue } = route.params;

  const [collage, setCollage] = useState(null);
  const [smokeMessageResult, setSmokeMessageResult] = useState([]);

  useEffect(() => {
    (async () => {
      let msgs = await (async () => {
        let msgs = await getAllPhotos(locationValue._id);
        return msgs;
      })();
      if (msgs.length > 0) {
        console.log(msgs);
        let smokeMsgs = SmokeMessages(msgs.map((val, index) => {
          return val.comment
        }));
        setSmokeMessageResult(smokeMsgs);
      }
    })();

    (async () => {
      let collageTemp = await getCollageFromRef(locationValue.collageRef);
      setCollage(collageTemp);
    })()
  }, []);

  return (
  <View style={styles.container}>
      {collage?
      <ScrollView horizontal={true} minimumZoomScale={1} maximumZoomScale={5}>
      <Image source={{uri: collage.public_url}} style={{height:screenHeight * 0.3, width: collage.width? collage.width: screenHeight * .45}}/>
    </ScrollView>:null
      }
      <ScrollView>
          <Text>{smokeMessageResult}</Text>
      </ScrollView>

      <View style={styles.bottom}>
        <Image source={require('../../assets/campsite-ani-2.gif')} style={styles.bottom}/>
        <Pressable
        onPress={() => navigation.navigate('Photo Test', {uploadState: locationValue._id})}>
        <Image source={require('../../assets/button-contribute-01.png')} style={styles.floatingContribute}/>
      </Pressable>
      </View>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a1600',
    color: '#ffffff',
    alignItems: 'center',
  },
  bottom: {
    marginBottom: 36,
    height: screenHeight * 0.25,
    alignItems: 'center',
    resizeMode: 'contain'
  },
  textAligned: {
    // flex: 1,
    width: Dimensions.get('window').width,
  },
  floatingExit: {
    width: 50,  
    height: 50,   
    borderRadius: 30,                                           
    position: 'absolute',                                          
    top: 10,                                                    
    right: 10, 
  },
  floatingContribute: {
    width: 50,  
    height: 50,   
    borderRadius: 30,                                           
    position: 'absolute', 
    bottom: 10,
    right: -175,
  },
  smoking: {
    springConfig: {stiffness: 340, damping: 30}
  }
});