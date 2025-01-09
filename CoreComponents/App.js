import { Text, View } from "react-native";

export default function App(){
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Text>Hello World from React Native</Text>
      <Text>
        <Text style={{ color: "#fff" }}>In React Native world</Text>
      </Text>
    </View>
  );
}