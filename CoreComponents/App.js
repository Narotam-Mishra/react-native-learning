import { Alert, Button, View } from "react-native";
import Greet from "./components/Greet";
const logoImg = require("./assets/adaptive-icon.png")

export default function App(){

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Greet name="Sachin Tendulkar"/>
      <Greet name="Mark Waugh"/>
    </View>
  );
}