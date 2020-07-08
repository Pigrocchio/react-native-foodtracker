import * as React from "react";
import { NavigationContainer, D } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import Home from "../Home";
// import Detail from '../Detail'
import SearchScreen from "../SearchScreen";

const Stack = createStackNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "white",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
  },
};

function MainStackNavigator() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRouteName="SearchScreen">
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;