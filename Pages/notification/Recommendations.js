import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useState } from "react";
import { SwitchComponent } from "./MindfulMoment";

const Recommendations = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text
          style={{
            fontSize: 16,
            color: "rgba(0,0,0,0.5)",
            textAlign:'center'
          }}
        >
          Not sure what to do next? We'll send you the occasional recommendation.
        </Text>
      </View>
      <View style={{flex:1, backgroundColor:'white'}} >
        <SwitchComponent
          text={"Remind me"}
          state={isEnabled}
          stateFunc={toggleSwitch}
        >
          <Text style={{ fontSize: 18 }}>Notifications</Text>
        </SwitchComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  main: {
    paddingVertical:20
  },
});

export default Recommendations;
