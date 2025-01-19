import { useState } from "react";
import { StatusBar, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App(){
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar backgroundColor="lightgreen" barStyle="light-content" hidden={false} />
    </View>
  );
}