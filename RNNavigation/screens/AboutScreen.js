import { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native"

export default function AboutScreen({ route, navigation }){  
    const { name } = route.params;
    useLayoutEffect(() => {
      navigation.setOptions({
        title: name
      })
    }, [navigation, name]);

    return (
      <View style={styles.container}>
        <Text style={styles.text}>About {name}</Text>
        <Button
          title="Update the name"
          onPress={() => navigation.setParams({
            name: "Developer",
          })}
        />
        <Button
          title="Go back to data"
          onPress={() => navigation.navigate("Home", {
            result: "Data from about"
          })}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    }
})