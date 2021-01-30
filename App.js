import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Home, DetailScreen } from "./src/screens";

const navigation = createStackNavigator(
  {
    Home: Home,
    Detail: DetailScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Rick and Morty",
    },
  }
);

export default createAppContainer(navigation);
