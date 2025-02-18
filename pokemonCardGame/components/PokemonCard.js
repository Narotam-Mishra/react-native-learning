import { Image, Platform, StyleSheet, Text, View } from "react-native";

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
  return (
    <View style={styles.card}>
      {/* block - 1 */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>

      {/* block - 2 */}
      <Image
        source={image}
        style={styles.image}
        accessibilityLabel={`${name} pokemon`}
        resizeMode="contain"
      />

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
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
    },
    name:{
        fontSize: 30,
        fontWeight: "bold",
    },
    hp: {
        fontSize: 22,
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16,
    }
})