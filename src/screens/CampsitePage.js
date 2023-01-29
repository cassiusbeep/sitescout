import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Dimensions, Pressable, ScrollView, MaskedViewIOS} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import sample_icon from "../../assets/site-icon-2-01.png";
import getUserLocation from "../../functions/locationFunctions";
import { useEffect, useState } from "react";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import smokeMask from 'smoke-mask-01';

const screenHeight = Dimensions.get('window').height

export default function CampsitePage({navigation}) {
  return (
  <View style={styles.container}>

    <Pressable 
      style={styles.navButton}
      onPress={() => navigation.navigate('ExplorationMap')}>
      <Text style={styles.navButton}>Back to the map</Text>
    </Pressable>

    <ScrollView horizontal={true}>
      <Image source={require('../../assets/placeholder-01.png')} style={{height:screenHeight * 0.45}}/>
    </ScrollView>

    <ScrollView>

    <MaskedViewIOS 
      maskElement={
        <Image source={require('../../assets/smoke-mask-01.png')} />
      }>
      <Text style={styles.container}>
        Generated smoke messages will go here.
        They need to have the format of Texts
        They need to be white at the bottom of the screen and decrease in transparency based on their position on-screen. 
        They need to be placed somewhat randomly horizontally. 
        XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} XXXXX {'\n'} 
      </Text>
    </MaskedViewIOS>
    </ScrollView>
      <View style={styles.bottom}>
        <Image source={require('../../assets/campsite-ani-2.gif')} style={styles.bottom}/>
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
  navButton: {
    backgroundColor: '#e34c00',
    borderColor: 'red',
    color: '#ffffff',
    padding: 3, 
    alignItems: 'center'    
  },
  bottom: {
    marginBottom: 36,
    height: screenHeight * 0.25,
    alignItems: 'center',
    resizeMode: 'contain'
  }
});