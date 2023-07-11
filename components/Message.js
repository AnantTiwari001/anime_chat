import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Message = ({ msgInfo, isRecieve, emoji, isReply }) => {
  return (
    <View style={isRecieve ? styles.containerRecieve : styles.containerSend}>
      <View
        style={[
          styles.msgContainer,
          isRecieve
            ? { backgroundColor: "#f0f0fe" }
            : { backgroundColor: "blue" },
        ]}
      >
        {isReply && (<Text style={styles.replyBlock} >{isReply}</Text>) }
        
        <Text style={styles.msgText}>{msgInfo.msg}</Text>
        <Text style={styles.status}>{isRecieve ? null : "⚫"}</Text>
      </View>
      {emoji && (<View style={isRecieve? {alignSelf:"flex-start", paddingLeft:10}: {alignSelf:'flex-end', paddingRight:10}} >
        <AntDesign name={emoji} size={12} color={"black"} />
      </View>)}
      
      <Text style={isRecieve ? styles.timeRecieve : styles.timeSend}>
        {msgInfo.time}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerSend: {
    alignSelf: "flex-end",
    marginBottom: 12,
  },
  containerRecieve: {
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  msgContainer: {
    minWidth: 170,
    // height: 60,
    maxWidth:260,
    padding: 10,
    borderRadius: 25,
    borderBottomRightRadius: 7,
  },
  msgText: {
    textAlign: "left",
  },
  status: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  timeSend: {
    alignSelf: "flex-end",
    paddingRight: 7,
  },
  timeRecieve: {
    alignSelf: "flex-start",
    paddingLeft: 7,
  },
  replyBlock:{
    backgroundColor:'rgba(0,0,0,0.1)',
    paddingVertical:3,
    paddingHorizontal:13,
    borderLeftWidth:2
  }
});

export default Message;
