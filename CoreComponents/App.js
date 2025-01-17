import { Button, Image, Pressable, Text, View } from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App(){
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button
        title="Press"
        onPress={() => console.log("Add Button pressed")}
        color="midnightblue"
        disabled={false}
      />
      <Pressable onPress={() => console.log("Image pressed!!")
      }>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
      <Pressable onPress={() => console.log("Text pressed!!")}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          recusandae eveniet doloribus iusto veniam nostrum ea eum consequuntur
          ipsum consectetur? Odit doloribus ullam quasi iste illum! Magnam,
          deserunt pariatur ex omnis molestiae nihil incidunt, ab facilis enim
          cum laborum error officiis sapiente tempora maiores natus assumenda
          quisquam optio totam! Eos accusamus ratione distinctio dolore neque,
          voluptatem fugit deserunt corrupti itaque unde voluptatum vel. Illo
          molestiae nihil sequi non quis autem quaerat exercitationem quam
          provident incidunt eveniet nulla numquam eaque consequatur excepturi,
          pariatur animi eum iusto. Odit tempora vel voluptatibus eius quam
          accusamus error exercitationem temporibus, repudiandae adipisci
          assumenda doloremque praesentium?
        </Text>
      </Pressable>
    </View>
  );
}