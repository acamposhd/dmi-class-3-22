import React, { useEffect, useState } from "react";
import { Button, Image, Platform, View } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const CAPTURE_OPTIONS = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsMultipleSelection: false,
    allowsEditing: true,
    aspect: [3, 4],
    quality: 0.5,
  };

  const TYPES = {
    load: "LOAD",
    capture: "CAPTURE",
  };
  const handleLoadOrTakePicture = (type) => {
    setTimeout(async () => {
      let result;
      if (type === TYPES.capture) {
        result = await ImagePicker.launchCameraAsync(CAPTURE_OPTIONS);
      } else if (type === TYPES.load) {
        result = await ImagePicker.launchImageLibraryAsync(CAPTURE_OPTIONS);
      } else {
        return;
      }
      console.log({ result });
      setImage(result.uri);
    }, 200);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Pick an image from camera roll"
        onPress={() => handleLoadOrTakePicture(TYPES.load)}
      />
      <Button
        title="Take a picture"
        onPress={() => handleLoadOrTakePicture(TYPES.capture)}
      />
      {image && (
        <Image source={{ uri: image }} style={{ width: 400, height: 300 }} />
      )}
    </View>
  );
}
