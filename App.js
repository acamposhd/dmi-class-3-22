import React, { useState } from "react";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Settings from "./pages/Settings";
import About from "./pages/About";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tabs = [
  {
    name: "Home",
    component: Main,
    options: { headerShown: false },
  },
  {
    name: "Settings",
    component: Settings,
    options: { headerShown: true },
  },
  {
    name: "About",
    component: About,
    options: { headerShown: false },
  },
];

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  };
  return (
    <NavigationContainer>
      {!isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={() => <Login login={login} />}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "settings-outline";
              } else if (route.name === "About") {
                iconName = focused
                  ? "information-circle"
                  : "information-circle-outline";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          {Tabs.map((tab, index) => (
            <Tab.Screen
              key={index}
              name={tab.name}
              component={tab.component}
              options={tab.options}
            />
          ))}
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
}
