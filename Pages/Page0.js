import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import LogButton from "../components/LogButton";

const Page0 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: "center",
        }}
      >
        Welcome
      </Text>
      <View style={styles.btnGroup}>
        <TouchableOpacity onPress={()=>{navigation.navigate('sChoose')}} >
          <LogButton text={"Sign up"} dark={false} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('sChoose')}}>
          <LogButton text={"Sign in"} dark={true} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#31bbff",
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 35,
    justifyContent: "flex-end",
  },
  btnGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
});

export default Page0;
