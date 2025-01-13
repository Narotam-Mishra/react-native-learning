import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App(){
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Image source={logoImg} style={{ width: 300, height: 300 }} /> */}
      {/* <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      /> */}
      {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Image Text</Text>
      </ImageBackground> */}
      
      <ScrollView>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero veniam
        aspernatur ut distinctio deleniti id enim eveniet cum nostrum vel
        eligendi tempore voluptatibus placeat qui dolores voluptates error
        reprehenderit, possimus magnam sequi suscipit tenetur? Et iusto expedita
        nobis voluptatem amet placeat! Sed voluptates quasi et omnis odit ipsa
        atque fugit neque vero quo. Dignissimos quod a reprehenderit placeat
        ipsa tempore veritatis eos sapiente laudantium, dolores quo consectetur
        hic commodi est illo officiis! Et voluptas praesentium sapiente, totam
        voluptatibus qui natus dicta ut ullam assumenda, quidem ab, obcaecati
        fugiat? Reprehenderit placeat fuga, quo cum natus reiciendis dolores
        eos? Quod, nam id?
      </Text>
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}