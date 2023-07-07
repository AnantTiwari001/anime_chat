import { View, Text, StyleSheet, Switch } from "react-native";
import { useState } from "react";

const MindfulMoment = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <Text style={styles.aboutText} >Hello world</Text>
      <SwitchComponent  state={isEnabled} stateFunc={toggleSwitch}>
        <Text style={styles.txt} >Notifications</Text>
      </SwitchComponent>
    </View>
  );
};

export function SwitchComponent({state, stateFunc,children}){
  return(
    <View style={styles.notify}>
        {children}
        <View style={{}} >
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={state ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={stateFunc}
            value={state}
          />
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  notify: {
    // paddingVertical:0,
    borderBottomWidth:2,
    flexDirection:'row',
    borderColor:'#ecf0f1',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:15,
    paddingHorizontal:20
  },
  txt: {
    fontSize:18,
    fontWeight:700
  },
  aboutText:{
    paddingVertical:20,
    paddingHorizontal:35,
    backgroundColor:'#ecf0f1',
    textAlign:'center',
  }
});

export default MindfulMoment;
