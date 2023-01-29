import * as Location from 'expo-location';
import {ENDPOINT} from '../global';

export default async function getUserLocation() {
      
	let { status } = await Location.requestForegroundPermissionsAsync();
	if (status !== 'granted') {
		return "Error";
	}
	let location = await Location.getCurrentPositionAsync({});

	return location;
}

export async function getAllLocations() {
	const endpoint = ENDPOINT + "allLocation";
	return await fetch(endpoint, {
		method: "GET"
	}).then(response => response.json())
	.then((res) => {
		return res;
	});
}

export async function getAllPhotos(locationId) {
	const endpoint = ENDPOINT + `photos?locationId=${locationId}`
	return await fetch(endpoint, {
		method: "GET"
	}).then(response => response.json())
	.then((res) => {
		return res;
	});
}