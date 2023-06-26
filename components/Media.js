import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} from "react-native";

const Media = () => {
  const items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Media</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} >
        <View style={styles.mediaPreview}>
          <Image
            source={require("../assets/gallery_icon0.png")}
            style={{
              height: "100%",
              width:'100%',
              borderRadius: 15,
              borderColor: "rgba(0,0,0,0.5)",
              flex: 1,
            }}
          />
        </View>
        </TouchableOpacity>
      ))}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
  },
  text: {
    marginHorizontal: 25,
    marginVertical: 3,
    fontWeight: "bold",
    fontSize: 14,
  },
  mediaPreview: {
    width: 100,
    height: 100,
    marginHorizontal: 7,
  },
});

export default Media;
