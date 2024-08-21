import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screen/tabs/Home";
import Profile from "../screen/tabs/Profile";
import { Ionicons, Octicons, SimpleLineIcons } from "@expo/vector-icons";
import Cart from "../screen/tabs/cart";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 70,
          },
          tabBarLabelStyle: {
            fontSize: 15,
          },
          tabBarActiveTintColor: "#FCA37B",
          tabBarInactiveTintColor: "grey",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Octicons
                name="home"
                size={26}
                color={focused ? "#FCA37B" : "grey"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <SimpleLineIcons
                name="basket"
                size={26}
                color={focused ? "#FCA37B" : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="person-sharp"
                size={26}
                color={focused ? "#FCA37B" : "grey"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
