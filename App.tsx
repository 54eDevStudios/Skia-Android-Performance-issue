import React from "react";
import HomeScreen from "./src/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ListScreen } from "./src/ListScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Feed"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="List"
          component={ListScreen}
          options={{
            tabBarLabel: "List",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
