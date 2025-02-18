import { Image, Platform, StyleSheet, Text, View } from "react-native";

const getTypeDetails = (type) => {
    switch(type.toLowerCase()){
        case "electric":
            return { borderColor: "#ffd700", emoji: "⚡" }
        case "water":
            return { borderColor: "#6493ea", emoji: "💧" }
        case "fire":
            return { borderColor: "#ff5733", emoji: "🔥" }
        case "grass":
            return { borderColor: "#66cc66", emoji: "🦗" }
        default:
            return { borderColor: "#a0a0a0", emoji: "❓"}
    }
}

export default function PokemonCard({ name, image, type, hp, moves, weaknesses }) {
    const { borderColor, emoji } = getTypeDetails(type);

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
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
            <Text style={styles.typeEmoji}>{emoji}</Text>
            <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>

      {/* block - 4 */}
      <View style={styles.moveContainer}>
        <Text style={styles.moveText}>Moves: {moves.join(", ")}</Text>
      </View>

      {/* block - 5 */}
      <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>Weakness: {weaknesses.join(", ")}</Text>
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
    },
    typeContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    badge: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
    typeEmoji: {
        fontSize: 30,
        marginRight: 12,
    },
    typeText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    moveContainer: {
        marginBottom: 16,
    },
    moveText: {
        fontSize: 22,
        fontWeight: "bold",
    },
    weaknessContainer: {
        marginBottom: 8,
    },
    weaknessText: {
        fontSize: 22,
        fontWeight: "bold",
    },
})