import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import FormScreen0 from "../components/FormScreen0";
import FormScreen1 from "../components/FormScreen1";
import FormScreen2 from "../components/FormScreen2";
import FormScreen3 from "../components/FormScreen3";
import FormScreen4 from "../components/FormScreen4";
import MainPage from "../Pages/MainPage";
import ChatPage from "../Pages/ChatPage";
import ProfilePage from "../Pages/ProfilePage";

const screens = {
  home: {
    screen: MainPage,
  },
  chat: {
    screen: ChatPage,
  },
  profile: {
    screen: ProfilePage,
  },
  first: {
    screen: FormScreen0,
  },
  second: {
    screen: FormScreen1,
  },
  third: {
    screen: FormScreen2,
  },
  fourth: {
    screen: FormScreen3,
  },
  fifth: {
    screen: FormScreen4,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "rgba(0,0,0,0)", height: 0 },
    headerTintColor: "rgba(0,0,0,0)",
    headerTitleStyle: { fontWeight: "bold" },
    headerShown: false,
  }
});

export default createAppContainer(HomeStack);