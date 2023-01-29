import { Wrapper, Status } from "@googlemaps/react-wrapper";
import {StyleSheet, Button, View, SafeAreaView, Text, Alert, Image} from 'react-native';
import MapView, {Marker} from "react-native-maps";
import sample_icon from "../../assets/site-icon-2-01.png";
import getUserLocation from "../../functions/locationFunctions";
import { useEffect, useState } from "react";
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function CampsitePage({route, navigation}) {
  const { locationValue } = route.params;

  return (
  <View style={styles.container}>
    <Button
    style={styles.navbutton}
      title="Back to Map"
      onPress={() => navigation.navigate('ExplorationMap')}
      color='#e34c00'
    />
    <Image source={require('../../assets/placeholder-01.png')} />
    <Text style={styles.textBox}>
      {locationValue.latest_image}
    </Text>
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a1600',
    color: '#ffffff'
  },
  textBox: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    color: '#3a1600',
    borderRadius: 4,
  }
});