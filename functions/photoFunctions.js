import { ENDPOINT, BUCKET_NAME } from "../global";

const HEADERS = {
	"content-type": "multipart/form-data",
	"accept": "application/json"
}

export async function uploadPhoto(locationRef, file_, comment) {
	const uri = ENDPOINT + "photo";
	const data = new FormData();
	data.append("locationId", locationRef);
	data.append("file_", file_);
	data.append("comment", comment);
	return await fetch(uri, {
		method: "POST",
		headers: HEADERS,
		body: data
	}).then(response => response.json())
	.then((res) => {
		return res;
	});
}

export async function uploadPin(lon, lat, file_, comment) {
	const uri = ENDPOINT + "location";
	const data = new FormData();
	data.append("lon", lon);
	data.append("lat", lat);
	data.append("file_", file_);
	data.append("comment", comment);
	return await fetch(uri, {
		method: "POST",
		headers: HEADERS,
		body: data
	}).then(response => response.json())
	.then((res) => {
		return res;
	});
}

export async function getPhotoFromRef(ref) {
	const uri = ENDPOINT + `photo?ref=${ref}`;
	console.log(uri);
	return fetch(uri, {
		method: "GET"
	}).then(response => response.json())
	.then((res) => {
		console.log(res);
		return res;
	});
}