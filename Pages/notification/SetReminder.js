import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useState } from "react";
import { SwitchComponent } from "./MindfulMoment";

const SetReminder = () => {
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.main} >
        <Text style={{fontSize:24, color:'rgba(0,0,0,0.5)', lineHeight:50, textAlign:'center'}} >
          Remind me to meditate at {"08:00 am"} on {"weekends"}
        </Text>
      </View>
      <SwitchComponent text={'Remind me'} state={isEnabled} stateFunc={toggleSwitch} >
        <Text style={{fontSize:18, color:'rgba(0,0,0,0.5)'}} >Remind me</Text>
      </SwitchComponent>
      <SwitchComponent text={'Remind me'} state={isEnabled} stateFunc={toggleSwitch} >
        <Text style={{fontSize:18, color:'rgba(0,0,0,0.5)'}} >Put it on my calendar</Text>
      </SwitchComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  main:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:110
  },
  notify: {
    paddingVertical:30,
    borderBottomWidth:2,
    flexDirection:'row',
    borderColor:'#ecf0f1',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:15,
    paddingHorizontal:20
  },
});

export default SetReminder;
