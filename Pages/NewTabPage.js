import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";

import { useRef, useEffect, useState } from "react";
import { Dimensions } from "react-native";

const spaceAround = 7;
const width = "45%";
const screenWidth = Dimensions.get("window").width;
// console.log('Screen Width:', screenWidth);

const verticalMargin =
  (screenWidth - 2 * (parseInt(width) / 100) * screenWidth) / 3 / 2;
// const verticalMargin= (screenWidth - ((100-(parseInt(width)*2) )/100)* screenWidth)

// console.log("The required vertical margin is", verticalMargin);

const NewTabPage = () => {
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
  return (
    <View style={{ flex: 1, backgroundColor: "#9090f0", paddingTop:30}}>
      <View
        style={{
          // borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 40,
          alignItems: "center",
          marginBottom:10
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Text style={{ fontSize: 20 }}>All </Text>
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={{ width: 20, aspectRatio: 1, borderRadius: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // borderWidth: 1,
            width: 70,
            alignItems: "center",
            height: 25,
            justifyContent: "space-evenly",
            flexDirection:'row',
            borderRadius:15,
            backgroundColor:'gray'
          }}
        >
          <Image
            source={{ uri: "https://picsum.photos/200/300" }}
            style={{ width: 20, aspectRatio: 1, borderRadius: 5 }}
          />
          <Text>2</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, { borderColor: "red" }]}>
        <ScrollView style={{ paddingHorizontal: spaceAround }}>
          {/* <Card item={items[1]} hidden={true} /> */}
          {/* <View style={{ borderColor:'red', flexDirection:'row'}}>
          <Card item={items[2]} />
          <Card item={items[3]} />
        </View> */}
          {items.map((item, index) =>
            index % 2 == 0 ? (
              <View style={{ flexDirection: "row" }} key={index}>
                <Card item={item} key={index} />
                {/* {items[index+1]?(<Card item={items[index+1]} key={index+1}/>):(<Card item={item[0]} key={index+1} />)} */}
                {/* {items[index+1]?(<Card item={items[index+1]} key={index+1}/>):(<Card item={item[0]} key={index+1} />)} */}
                {items[index + 1] ? (
                  <Card item={items[index + 1]} key={index+1} />
                ) : (
                  <Card item={items[0]} hidden={true} key={index+1} />
                )}
              </View>
            ) : (
              <>{console.log(index)}</>
            )
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const Card = ({ item, hidden }) => {
  return (
    <View style={hidden ? styles.lastCardContainer : styles.cardContainer}>
      <ImageBackground
        source={{ uri: item.url }}
        style={{ flex: 1, padding: 10 }}
        borderRadius={20}
      >
        <View style={styles.point}>
          {/* Points badge */}
          <Text style={{ marginRight: 3 }}>✦</Text>
          <Text>{item.points} </Text>
        </View>
        <View style={styles.cardMain}>
          <View>
            <Text style={{ color: "white", fontSize: 18 }}>{item.name}</Text>
          </View>
          <Text style={{ color: "#ffffffb0", fontSize: 12, marginVertical: 2 }}>
            {item.desc}
          </Text>
          <TouchableOpacity style={styles.cardBtn}>
            <Text>Try Now →</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    // justifyContent: "space-evenly",
    alignItems: "flex-start",
    flexWrap: "wrap",
    // borderWidth: 1,
    // borderColor: "tomato",
  },
  cardContainer: {
    backgroundColor: "tomato",
    aspectRatio: 0.66,
    alignSelf: "flex-start",
    flex: 1,
    marginHorizontal: spaceAround,
    borderRadius: 20,
    // width: width,
    // borderWidth: 1,
    marginVertical: verticalMargin,

    // borderWidth: 2,
  },
  lastCardContainer: {
    backgroundColor: "tomato",
    aspectRatio: 0.66,
    alignSelf: "flex-start",
    flex: 1,
    marginHorizontal: spaceAround,
    borderRadius: 20,
    // width: width,
    // borderWidth: 1,
    marginVertical: verticalMargin,
    opacity: 0,
  },
  point: {
    backgroundColor: "#00000070",
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 1,
    paddingHorizontal: 9,
    borderRadius: 10,
  },
  cardMain: {
    flex: 1,
    // borderWidth:1,
    justifyContent: "flex-end",
  },
  cardBtn: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 15,
    justifyContent: "center",
    marginVertical: 4,
  },
});

export default NewTabPage;
