import ENDPOINT from "../global";

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
	const uri = ENDPOINT + "location"
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