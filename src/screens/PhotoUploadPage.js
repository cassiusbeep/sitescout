import {StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, TextInput} from 'react-native';
import { useEffect, useState } from "react";
import * as React from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import getUserLocation from '../../functions/locationFunctions';
import * as fs from "expo-file-system";
import { uploadPhoto, uploadPin } from '../../functions/photoFunctions';

export default function PhotoUploadPage({route, navigation}) {
	const [location, setLocation] = React.useState(null);
	const [image, setImage] = React.useState(null);
	const [comment, setComment] = React.useState("");

	const { uploadState } = route.params;

	useEffect(() => {
		if (uploadState === "NEW"){
			(async () => {
				let loc = await getUserLocation();
				setLocation(loc);
			  })();
		}
	  }, []);
 
	async function componentDidMount() {
		const permission = await Permissions.getAsync(Permissions.CAMERA);
		if (permission.status !== 'granted') {
			const newPermission = await Permissions.askAsync(Permissions.CAMERA);
			if (newPermission.status === 'granted') {
			  //its granted.
			  await takeAndUploadPhotoAsync();
			}
		} else {
		 	await takeAndUploadPhotoAsync();
	  }
	}

	async function takeAndUploadPhotoAsync() {
		// Display the camera to the user and wait for them to take a photo or to cancel
		// the action
		let result = await ImagePicker.launchCameraAsync({
		  	allowsEditing: true,
			quality: 0.5
		});

		if (result === null) {
			return;
		}
	  
		if (result.canceled) {
		  return;
		}
	  
		setImage(result);
	  }

	async function getImageBlob() {
		if (image.assets.base64 === null) {
			return fs.readAsStringAsync(image.uri, {encoding: fs.EncodingType.Base64})
			.then(function(image_blob){
                image_blob = "data:image/jpg;base64," + image_blob;
				return image_blob;
			});
		} else {
			image_blob = 'data:image/jpeg;base64,' + image.assets.base64;
			return image_blob;
		}
	}

	async function uploadPhotoAndRedirect() {
		const image_blob = await getImageBlob();
		if (uploadState === "NEW") {
			uploadPin(location.coords.longitude, location.coords.latitude, image_blob, comment);
		} else {
			uploadPhoto(uploadState, image_blob, comment);
		}
	}

	return (
	<View style={styles.container}>
		<Button title={image? "Retake photo": "Add to the collage"} onPress={componentDidMount} />
		{image &&
			<View style={{ flex: 1, alignItems: "center", width: "100%"}}>
				<TextInput
					style={styles.input}
						onChangeText={setComment}
						value={comment}
					/>
				<Image source={{ uri: image.uri }} style={{ width: "100%", height: "70%", }} />
				<Button title="Upload" onPress={uploadPhotoAndRedirect}/>
				</View>}
	</View>);
}

const styles = StyleSheet.create({
	input: {
		height: 100,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	height: 1000
  },
});
  

  