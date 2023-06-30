import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Contact from "../components/Contact";

const items = [
  {
    name: "Layla Rose",
    lastMsg: "How are you doing?!",
    time: "8:20 PM",
    url: "https://picsum.photos/200/300",
  },
  {
    name: "Saphire Blueshort",
    lastMsg: "That sounds amazing!!",
    time: "tue 9:07 PM",
    url: "https://picsum.photos/200/300",
  },
  {
    name: "Jade River",
    lastMsg: "Lets... do this:?",
    time: "wed 12:04 PM",
    url: "https://picsum.photos/200/300",
  },
  {
    name: "Sophie Road",
    lastMsg: "Why does this always happen...",
    time: "wed 4:01 PM",
    url: "https://picsum.photos/200/300",
  },
];

const MainPage = ({navigation}) => {
  const handleNew=()=>{
    navigation.navigate('first')
  }
  const contactHandle=()=>{
    // navigation.navigate('chat', {profile:{url:'https://picsum.photos/200/300', name:'Layla Rose', status:'Online'},pagei:'MainIs'});
    // console.log(navigation.navigate('chat'));
    navigation.navigate('chatingScreen', {profile:{url:'https://picsum.photos/200/300', name:'Layla Rose', status:'Online'}, pagei:'whatever'});
    // navigation.setParams('hello world')
    // navigation.navigate('chatScreen')
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollcontainer}>
        {items.map((item, index) => (
          <TouchableOpacity key={index} onPress={contactHandle} >
            <Contact contactInfo={item} />
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={{marginTop:7}} onPress={handleNew} >
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b9bdbd",
    borderWidth: 1,
    paddingTop: 150,
  },
  scrollcontainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  add: {
    alignSelf: "center",
    borderWidth: 1,
    fontSize: 24,
    width: 40,
    height: 40,
    textAlign: "center",
    verticalAlign: "middle",
    borderRadius: 20,
  },
});

export default MainPage;
