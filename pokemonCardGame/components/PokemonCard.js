import { Image, Platform, StyleSheet, Text, View } from "react-native";

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      {/* block - 1 */}
      <View>
        <Text>{name}</Text>
        <Text>{hp}</Text>
      </View>

      {/* block - 2 */}
      {/* <Image source={image} accessibilityLabel={`${name} pokemon`} /> */}

      {/* block - 3 */}
      <View>
        <Text>{type}</Text>
      </View>

      {/* block - 4 */}
      <View>
        <Text>Moves: {moves.join(", ")}</Text>
      </View>

      {/* block - 5 */}
      <View>
        <Text>Weakness: {weaknesses.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            }
        })
    }
})