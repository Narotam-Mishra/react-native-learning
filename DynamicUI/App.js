import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>SafeAreaView</Text>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'plum',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',
  },
  box:{
    padding: 20,
  },
  text:{
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  }
});
