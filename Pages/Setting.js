import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

const Setting = ({ navigation }) => {
  const items = [
    { name: "Notifications", link: "Notification" },
    { name: "Language", link:"Language"},
    { name: "Support" },
    { name: "Terms & Conditions", link:'Terms And Conditions' },
    { name: "My Data" },
  ];
  const handleClick = (page) => {
    page && navigation.navigate(page);
  };
  return (
    <ScrollView style={styles.container}>
      {items.map((item, index) => (
        <TouchableOpacity
          style={styles.item}
          key={index}
          onPress={() => handleClick(item.link)}
        >
          <Text style={{ fontSize: 17, fontWeight: 600 }}>{item.name}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.info}>
        <Text style={[styles.grey]}>Logged in as</Text>
        <Text style={[styles.grey]}>{"theprojectmelody@gmail.com"}</Text>
        <Text style={[styles.grey, { marginVertical: 15, fontSize: 16 }]}>
          Version 4.157.1(310800)
        </Text>
        <View style={styles.btn}>
          <Button title="Log Out" color={"blue"} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#b9bdbd',
    backgroundColor: "white",
    flex: 1,
  },
  item: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderBottomColor: "#ecf0f1",
    borderBottomWidth: 2,
  },
  grey: {
    color: "gray",
    lineHeight: 20,
  },
  info: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  btn: {
    borderWidth: 1,
    alignSelf: "stretch",
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "blue",
  },
});

export default Setting;
