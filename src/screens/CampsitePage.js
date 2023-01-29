import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Dimensions, Pressable, ScrollView} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import sample_icon from "../../assets/site-icon-2-01.png";
import getUserLocation from "../../functions/locationFunctions";
import { useEffect, useState } from "react";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import smokeMessages from "../../functions/smokeFunction.mjs";
import PhotoUploadPage from './PhotoUploadPage';

/*TODO :: take in data from server. 
          use collage image instead of placeholder-01.png. 
          populate listMessages with (REVERSED) array of comments (so newest are first).
           
*/

const screenHeight = Dimensions.get('window').height;
const listMessages = ['Test message 1', 'Test message 2', 'Test message 3', 'Test message 4', 'Test message 5', 'Test message 6', ];
const smokeMessageResult = smokeMessages(listMessages);

export default function CampsitePage({route, navigation}) {
  const { locationValue } = route.params;

  return (
  <View style={styles.container}>

      <ScrollView horizontal={true}>
        <Image source={require('../../assets/placeholder-01.png')} style={{height:screenHeight * 0.45}}/>
      </ScrollView>

      <ScrollView>
        <View style={styles.textAligned}>
          <Text>{smokeMessageResult}</Text>
        </View>
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
    flexDirection: 'row',
    flex: 1,
    width: Dimensions.get('window').width
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
});