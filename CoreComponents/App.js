import { Button, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App(){
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Add"
        onPress={() => console.log("Add Button pressed")}
        color="midnightblue"
        disabled={false}
      />
    </View>
  );
}