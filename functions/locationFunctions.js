import * as Location from 'expo-location';

export default async function getUserLocation() {
      
	let { status } = await Location.requestForegroundPermissionsAsync();
	if (status !== 'granted') {
		return "Error";
	}

	let location = await Location.getCurrentPositionAsync({});

	return location;
}