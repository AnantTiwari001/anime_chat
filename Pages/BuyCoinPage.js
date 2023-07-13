import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import LogButton from "../components/LogButton";
import { CommonStyle, StyleValues } from "../assets/styles";

const BuyCoinPage = ({closeFunc}) => {
  return (
    <View style={[CommonStyle.container,{padding:StyleValues.paddingMargin[3]}]}>
      <TouchableOpacity onPress={closeFunc}>
        <AntDesign name="close" size={20} color="black" />
      </TouchableOpacity>
      <View>
        <View style={styles.heading}>
          <Text style={{ fontSize: StyleValues.font[3], color: StyleValues.color.dark }}>Buy More Coins</Text>
          <View style={styles.coin}>
            <FontAwesome5 name="coins" size={24} color="gray" />
            <Text style={{ color: "white" }}>0</Text>
          </View>
        </View>
        <View   >
          <View style={[{ flexDirection: "row", marginBottom: 17 }]}>
            <Card info={{ coins: "100 Coins", price: "£10.99" }} />
            <View style={{ width: 17 }}></View>
            <Card info={{ coins: "250 Coins", price: "£21.99" }} />
          </View>
          <View style={{ flexDirection: "row" , marginBottom:17 }}>
            <Card info={{ coins: "500 Coins", price: "£43.99" }} />
            <View style={{ width: 17 }}></View>
            <Card info={{ coins: "1000 Coins", price: "£79.99" }} />
          </View>
        </View>
        <TouchableOpacity style={{alignSelf:'center', marginVertical:20, backgroundColor:'#520b6e', paddingVertical:18, paddingHorizontal:25, borderRadius:15 }} >
            <Text style={{color:'white', fontSize:17}} >Upgrade to Vip and get free coins →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Card = ({ info }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FontAwesome5 name="coins" size={50} color="white" />
        {console.log(info.coins)}
      </View>
      <TouchableOpacity style={[CommonStyle.container, CommonStyle.sEven, {borderRadius:StyleValues.radius[2],paddingHorizontal:StyleValues.paddingMargin[1]}]}>
        <Text style={{ color: "white", fontSize: 20 }}>{info.coins}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "white" }}>{info.price} </Text>
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(50,50,250)",
    padding: 15,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  coin: {
    width: 70,
    alignItems: "center",
    height: 25,
    justifyContent: "space-evenly",
    flexDirection: "row",
    borderRadius: 15,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "tomato",
    aspectRatio: 0.7,
    borderRadius: 20,
    padding: 10,
  },
  cardMain: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "space-evenly",
    backgroundColor: "rgba(0,0,0,0.2),",
    paddingHorizontal: 7,
  },
});

export default BuyCoinPage;
