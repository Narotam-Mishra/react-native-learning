import { ActivityIndicator, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App(){

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="midnightblue" animating={true} />
    </View>
  );
}