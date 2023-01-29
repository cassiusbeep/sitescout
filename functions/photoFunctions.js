import { ENDPOINT, BUCKET_NAME } from "../global";

export async function uploadPhoto(locationRef, file_, comment) {
	const uri = ENDPOINT + "photo";
	return await fetch(uri, {
		method: "POST",
		body: JSON.stringify({
			"locationId": locationRef,
			"file_": file_,
			"comment": comment
		})
	}).then(response => response.json())
	.then((res) => {
		return res;
	});
}

export async function uploadPin(lon, lat, file_, comment) {
	const uri = ENDPOINT + "location";
	return await fetch(uri, {
		method: "POST",
		body: JSON.stringify({
			"lon": lon.toString(),
			"lat": lat.toString(),
			"file_": file_,
			"comment": comment
		})
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