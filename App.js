import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  PermissionsAndroid,
  Alert
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationActions } from "react-navigation";
import NewTabPage from "./Pages/NewTabPage";
import Feedback from "./components/Feedback";
import MainPage from "./Pages/MainPage";
import ChatPage from "./Pages/ChatPage";
import ProfilePage from "./Pages/ProfilePage";
import FormScreen0 from "./components/FormScreen0";
import FormScreen1 from "./components/FormScreen1";
import FormScreen2 from "./components/FormScreen2";
import FormScreen3 from "./components/FormScreen3";
import FormScreen4 from "./components/FormScreen4";
import ChatingPage from "./Pages/ChatsPage";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";

const NewAnime = createNativeStackNavigator();

function NewAnimeScreen() {
  return (
    <NewAnime.Navigator screenOptions={{ headerShown: false }}>
      <NewAnime.Screen name="newAnime" component={NewTabPage} />
      <NewAnime.Screen name="feedBack" component={Feedback} />
    </NewAnime.Navigator>
  );
}

const ChatStack = createNativeStackNavigator();

function ChatScreen() {
  return (
    <ChatStack.Navigator screenOptions={{ headerShown: false }}>
      <ChatStack.Screen name="home" component={MainPage} />
      <ChatStack.Screen name="chatScreen" component={ChatPage} />
      <ChatStack.Screen name="chatingScreen" component={ChatingPage} />
      <ChatStack.Screen name="profile" component={ProfilePage} />
      <ChatStack.Screen name="first" component={FormScreen0} />
      <ChatStack.Screen name="second" component={FormScreen1} />
      <ChatStack.Screen name="third" component={FormScreen2} />
      <ChatStack.Screen name="fourth" component={FormScreen3} />
      <ChatStack.Screen name="fifth" component={FormScreen4} />
    </ChatStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  }

  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
    );
    // StatusBar.setHidden(false);
    // // StatusBar.setBackgroundColor('blue');
    // StatusBar.setTranslucent(false);
    // StatusBar.setTranslucent(true);

    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then((token) => console.log(token));
    } else {
      console.log("Permission denied!");
    }
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
          // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
        }
        // setLoading(false);
      });
    // background notification
    messaging().onNotificationOpenedApp( async(remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
      // navigation.navigate(remoteMessage.data.type);
    });
    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "new") {
              iconName = focused ? "fire" : "fire-alt";
            } else if (route.name === "Main") {
              iconName = focused ? "heartbeat" : "heart";
            } else if (route.name === "profile") {
              iconName = focused ? "grin" : "grin-alt";
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          tabBarLabel: "",
        })}
      >
        <Tab.Screen name="new" component={NewAnimeScreen} />
        <Tab.Screen name="Main" component={ChatScreen} />
        <Tab.Screen name="profile" component={Feedback} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
