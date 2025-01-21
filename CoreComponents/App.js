import { Alert, Button, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App(){

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert1" onPress={() => Alert.alert("Invalid data!!")} />
      <Button
        title="Alert2"
        onPress={() => Alert.alert("Invalid data!!!!!!!", "DOB incorrect")}
      />
      <Button
        title="Alert3"
        onPress={() => Alert.alert("Invalid data!!!!!!!", "DOB incorrect", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
          },
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },
        ])}
      />
    </View>
  );
}