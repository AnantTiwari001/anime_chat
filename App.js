import {
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import Setting from "./Pages/Setting";
import NotificationPage from "./Pages/NotificationPage";
import MindfulMoment from "./Pages/notification/MindfulMoment";
import SetReminder from "./Pages/notification/SetReminder";
import Recommendations from "./Pages/notification/Recommendations";
import LanguagePage from "./Pages/LanguagePage";
import TermPage from "./Pages/TermPage";
import { FontAwesome5 } from "@expo/vector-icons";
import { useEffect } from "react";
import * as Notifications from 'expo-notifications'

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

const ProfileStack= createNativeStackNavigator();

function ProfileScreen(){
  return(
    <ProfileStack.Navigator >
      <ProfileStack.Screen name="Setting" component={Setting} />
      <ProfileStack.Screen name="Notification" component={NotificationPage} />
      <ProfileStack.Screen name="Mindful moment" component={MindfulMoment} />
      <ProfileStack.Screen name="Set a reminder" component={SetReminder} />
      <ProfileStack.Screen name="Recommendations" component={Recommendations} />
      <ProfileStack.Screen name="Language" component={LanguagePage} />
      <ProfileStack.Screen name="Terms And Conditions" component={TermPage} />
    </ProfileStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  const registerForPushNotificationsAsync = async () => {
    try {
      const { status: existingStatus } = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }
      if (finalStatus !== 'granted') {
        throw new Error('Permission not granted!')
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data
      return token
    } catch (error) {
      console.error(error)
    }
  }


  async function roughe(){
    console.log('start!');
    registerForPushNotificationsAsync()
    let token=  await Notifications.getExpoPushTokenAsync();
    console.log(token.data)
    console.log('end!')
  }

  useEffect(()=>{
    roughe();
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: false,
      }),
    });
    
  },[])
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
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
