import {
  View,
  Text,
  Touchable,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import TypeMsg from "./TypeMsg";
import LogButton from "../components/LogButton";
import { useState } from "react";
import { CommonStyle, StyleValues } from "../assets/styles";

const SearchBar = () => {
  const [searchText, setSearchText] = useState(null);
  const trendingNrecent = ["anime0", "anime1", "anime2", "anime3", "anime4"];
  const allAnime = [
    "Attack on Titan",
    "Bleach",
    "Cowboy Bebop",
    "Death Note",
    "Elfen Lied",
    "Fullmetal Alchemist",
    "Gintama",
    "Hunter x Hunter",
    "Inuyasha",
    "JoJo's Bizarre Adventure",
    "K-On!",
    "Love Live! School Idol Project",
    "My Hero Academia",
    "Naruto",
    "One Piece",
    "Psycho-Pass",
    "Quanzhi Gaoshou",
    "Re:Zero − Starting Life in Another World",
    "Sword Art Online",
    "Tokyo Ghoul",
    "Usagi Drop",
    "Violet Evergarden",
    "Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!",
    "xxxHOLiC",
    "Your Lie in April",
    "Zankyou no Terror",
  ];

  return (
    <View>
      <View style={styles.searchContainer}>
        <TypeMsg
          text={searchText}
          setFunction={(text) => setSearchText(text)}
          placeholderText={"Meditations, exercise, advice"}
          icon={"search"}
        />
      </View>
      <View style={{borderRadius:StyleValues.radius[3]}} >
        <ScrollView
          style={CommonStyle.horizontal}
          horizontal={true}
          overScrollMode="never"
        >
          {searchText
            ? allAnime.map((item, index) =>
                item.indexOf(searchText) == 0 ? (
                  <View style={styles.labelItem}>
                    <LogButton text={item} dark={false} />
                  </View>
                ) : null
              )
            : trendingNrecent.map((item, index) => (
                <View style={{marginHorizontal:StyleValues.paddingMargin[0]}} key={index}>
                  <LogButton text={item} dark={false} />
                </View>
              ))}
          {/* <View style={styles.labelItem}>
          <LogButton text={"anger"} dark={false} />
        </View> */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  searchContainer: {
    // flexDirection: "row",
  },
  labels: {
    flexDirection: "row",
    // borderRadius: 15,
    // overflow: "hidden",
    // borderWidth: 1,
  },
  labelItem: {
    marginHorizontal: 3,
  },
});

export default SearchBar;
