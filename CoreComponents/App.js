import { View } from "react-native";

export default function App(){
  return <View style={{ flex: 1, backgroundColor: "plum" }}>
    <View style={{ width: 200, height: 200, backgroundColor: "lightgray"}}></View>
    <View style={{ width: 200, height: 200, backgroundColor: "lightgreen"}}></View>
  </View>
}