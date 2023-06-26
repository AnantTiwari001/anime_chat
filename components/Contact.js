import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const Contact = ({contactInfo}) => {
    
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: contactInfo.url }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
          <Text style={styles.name}>{contactInfo.name}</Text>
          <Text style={styles.lastMessage}>{contactInfo.lastMsg}</Text>
        </View>
        <Text style={styles.time} onPress={()=>console.log(contactInfo.url)} >{contactInfo.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderBottomColor:'#ecf0f1',
    borderBottomWidth:2,
    flex:1,
    flexDirection:'row',
    // justifyContent:'space-between',
    alignItems:'center',
    position:'relative',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius:25
  },
  textContainer:{
    marginLeft:15
  },
  name:{
    fontSize:16,
    fontWeight:600
  },
  lastMessage:{
    fontSize:14,
    color:'grey'
  },
  time:{
    position:'absolute',
    bottom:7,
    right:7
  }
});

export default Contact;
