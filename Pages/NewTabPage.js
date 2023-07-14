import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  Modal,
} from "react-native";
import PointContext from "../context/points/PointContext";

import SearchBar from "../components/SearchBar";

import { useRef, useEffect, useState, useContext } from "react";
import { Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import BuyCoinPage from "./BuyCoinPage";

import { CommonStyle, StyleValues } from "../assets/styles";


const NewTabPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const items = [
    {
      name: "anime1 hero1",
      desc: "the description of the anime",
      points: "100",
      url: "https://picsum.photos/200/300",
      users: "50",
    },
    {
      name: "anime2",
      desc: "the description of the anime",
      points: "100",
      url: "https://picsum.photos/200/300",
      users: "50",
    },
    {
      name: "anime3",
      desc: "the description of the anime",
      points: "100",
      url: "https://picsum.photos/200/300",
      users: "50",
    },
    {
      name: "anime4",
      desc: "the description of the anime",
      points: "100",
      url: "https://picsum.photos/200/300",
      users: "50",
    },
    {
      name: "anime5",
      desc: "the description of the anime",
      points: "100",
      url: "https://picsum.photos/200/300",
      users: "50",
    },
    {
      name: "anime6",
      desc: "the description of the anime",
      points: "100",
      url: "https://picsum.photos/200/300",
      users: "50",
    },
    {
      name: "anime7",
      desc: "the description of the anime",
      points: "100",
      url: "https://picsum.photos/200/300",
      users: "50",
    },
  ];
  const handleCoinPress = () => {
    console.log("pressed coin buy probably");
    setIsVisible(true);
  };
  const Context= useContext(PointContext);
  return (
    <View
      style={[CommonStyle.container, { padding: StyleValues.paddingMargin[2] }]}
    >
      <Modal
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <BuyCoinPage closeFunc={() => setIsVisible(false)} />
      </Modal>
      <View style={{}}>
        <SearchBar />
      </View>
      <View style={[CommonStyle.center, CommonStyle.horizontal, CommonStyle.sBtn, {paddingHorizontal:StyleValues.paddingMargin[3]}]}>
        <TouchableOpacity
          style={[CommonStyle.component, CommonStyle.horizontal]}
        >
          <Text style={{}}>All </Text>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={{ width: 20, aspectRatio: 1 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[CommonStyle.horizontal, CommonStyle.component]}
          onPress={handleCoinPress}
        >
          <FontAwesome5 name="coins" size={24} color="black" />
          <Text>{Context.point.value}</Text>
        </TouchableOpacity>
      </View>
      <View style={[CommonStyle.container]}>
        <ScrollView style={{}}>
          {items.map((item, index) =>
            index % 2 == 0 ? (
              <View style={[CommonStyle.horizontal]} key={index}>
                <Card item={item} />
                {items[index + 1] ? (
                  <Card item={items[index + 1]} />
                ) : (
                  <Card item={items[0]} hidden={true} />
                )}
              </View>
            ) : null
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const Card = ({ item, hidden }) => {
  return (
    <View
      style={[
        CommonStyle.container,
        hidden && { opacity: 0 },
        { aspectRatio: 0.66, margin: StyleValues.paddingMargin[2] },
      ]}
    >
      <ImageBackground
        source={{ uri: item.url }}
        style={[CommonStyle.container,CommonStyle.sBtn,{padding:StyleValues.paddingMargin[3]}]}
        borderRadius={StyleValues.radius[3]}
      >
        <View
          style={[
            CommonStyle.horizontal,
            CommonStyle.component,
            CommonStyle.selfStart,
          ]}
        >
          {/* Points badge */}
          <Text style={{}}>✦</Text>
          <Text>{item.points} </Text>
        </View>
        <View style={[{}]}>
          <View>
            <Text style={{}}>{item.name}</Text>
          </View>
          <Text style={{}}>{item.desc}</Text>
          <TouchableOpacity style={[CommonStyle.selfStart, CommonStyle.btn]}>
            <Text>Try Now →</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "row",
//     paddingHorizontal: 0,
//     alignItems: "flex-start",
//     flexWrap: "wrap",
//   },
//   cardContainer: {
//     backgroundColor: "tomato", // container, component
//     aspectRatio: 0.66,
//     // alignSelf: "flex-start",
//     flex: 1,
//     borderRadius: 20,
//     // width: width,

//     // borderWidth: 2,
//   },
//   point: {
//     backgroundColor: "#00000070",
//     flexDirection: "row",
//     alignSelf: "flex-start",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingBottom: 1,
//     paddingHorizontal: 9,
//     borderRadius: 10,
//   },
//   cardMain: {
//     flex: 1,
//     // borderWidth:1,
//     justifyContent: "flex-end",
//   },
//   cardBtn: {
//     backgroundColor: "white", // selfStart center
//     padding: 10,
//     borderRadius: 20,
//     alignSelf: "flex-start",
//     justifyContent: "center",
//     paddingHorizontal: 15,
//     justifyContent: "center",
//     marginVertical: 4,
//   },
//   headerContainer: {
//     flexDirection: "row", // center,   horizontal,
//     justifyContent: "space-between",
//     paddingHorizontal: 40,
//     alignItems: "center",
//     marginBottom: 10,
//     flex: 0,
//   },
// });

export default NewTabPage;
