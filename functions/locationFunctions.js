import * as Location from 'expo-location';

export default async function getUserLocation() {
      
	let { status } = await Location.requestForegroundPermissionsAsync();
	if (status !== 'granted') {
		return "Error";
	}

	let location = await Location.getCurrentPositionAsync({});

	return location;
}

export async function getAllLocations() {
	const endpoint = "http://139.144.57.146:8000/allLocation";
	return await fetch(endpoint, {
		method: "GET"
	}).then(response => response.json())
	.then((res) => {
		return res;
	});
}