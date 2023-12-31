import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import LogButton from "../components/LogButton";
import { CommonStyle, StyleValues } from "../assets/styles";
import PointContext from "../context/points/PointContext";
import { useContext, useEffect } from "react";
import app from "../firebase/config";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import auth from "../firebase/auth";


const BuyCoinPage = () => {
  const Point= useContext(PointContext);

  const db= getFirestore(app);

  useEffect(()=>{
    const docRef= doc(db, "Credit", auth.currentUser.uid);
    const unsub=onSnapshot(docRef,(doc)=>{
      let data=doc.data();
      console.log('',data)
      // if(Point.point.value==)
      Point.point.setFunc(data.points)
    })
  },[]);
  return (
    <View style={[CommonStyle.container,{padding:StyleValues.paddingMargin[3]}]}>
      <View>
        <View style={styles.heading}>
          <Text style={{ fontSize: StyleValues.font[3], color: StyleValues.color.dark }}>Buy More Coins</Text>
          <View style={styles.coin}>
            <FontAwesome5 name="coins" size={24} color="gray" />
            <Text style={{ color: "white" }}>{Point.point.value}</Text>
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
        <TouchableOpacity onPress={()=>console.log(Point)} style={[{marginVertical:StyleValues.paddingMargin[4], backgroundColor:StyleValues.color.dark, paddingVertical:18, paddingHorizontal:25, borderRadius:15 },CommonStyle.center]} >
            <Text style={{color:StyleValues.color.light, fontSize:StyleValues.font[2]}} >Upgrade to Vip and get free coins →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Card = ({ info }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={[ CommonStyle.container, CommonStyle.center]}>
        <FontAwesome5 name="coins" size={50} color="white" />
        {/* {console.log(info.coins)} */}
      </View>
      <TouchableOpacity style={[CommonStyle.container, CommonStyle.sEven, {borderRadius:StyleValues.radius[2],paddingHorizontal:StyleValues.paddingMargin[1]}]}>
        <Text style={{ color: StyleValues.color.light, fontSize: StyleValues.font[2] }}>{info.coins}</Text>
        <View style={[CommonStyle.horizontal, CommonStyle.sBtn]}>
          <Text style={{ color: StyleValues.color.light }}>{info.price} </Text>
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
