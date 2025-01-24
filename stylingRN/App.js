import { StyleSheet, Text, View } from "react-native";


export default function App(){
  return(
    // <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
    //   <Text>Stylesheet API React Native</Text>
    // </View>
    <View style={styles.container}>
      <Text style={styles.title}>Stylesheet API React Native check...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    padding: 60
  },
  title:{
    fontSize: 30,
    fontWeight: "bold",
    color: "blue"
  }
})