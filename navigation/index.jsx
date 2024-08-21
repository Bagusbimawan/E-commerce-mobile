import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screen/splash";
import Tabs from "./tabs";
import Login from "../screen/login";
import Register from "../screen/register";
import MyOrder from "../screen/tabs/Profile/child/MyOrder";
import Myprofile from "../screen/tabs/Profile/child/Myprofile";
import Setting from "../screen/tabs/Profile/child/Setting";
import Notfication from "../screen/tabs/Profile/child/Notfication";

const stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="splash">
        <stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        
        <stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="register"
          component={Register}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name="myorder"
          component={MyOrder}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="myprofile"
          component={Myprofile}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name="setting"
          component={Setting}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name="notification"
          component={Notfication}
          options={{ headerShown: false }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
