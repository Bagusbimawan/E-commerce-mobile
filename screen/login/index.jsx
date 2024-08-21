import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Button, Input } from "react-native-magnus";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const Login = ({ navigation }) => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign
            name="arrowleft"
            size={28}
            color="black"
            style={{ marginTop: 60, marginLeft: 15 }}
          />
        </Pressable>

        <View>
          <Text
            style={{
              marginLeft: 32,
              fontSize: 25,
              marginTop: 70,
              fontWeight: "400",
            }}
          >
            Login
          </Text>
          <Input placeholder="Username" w={wp(85)} ml={30} mt={20} />
          <Text
            style={{
              marginLeft: 32,
              fontSize: 25,
              marginTop: 20,
              fontWeight: "400",
            }}
          >
            Password
          </Text>
          <Input
            placeholder="Password"
            w={wp(85)}
            ml={30}
            secureTextEntry
            mt={20}
          />
          <Button
            w={wp(85)}
            ml={30}
            bg="#FCA37B"
            mt={70}
            h={53}
            fontSize={17}
            fontWeight="400"
            onPress={() => navigation.navigate("tabs")}
          >
            Login
          </Button>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                marginTop: 60,
                marginLeft: 80,
                color: "grey",
              }}
            >
              Dont have account?
            </Text>
            <Pressable onPress={() => navigation.navigate("register")}>
              <Text
                style={{
                  marginTop: 60,
                  fontSize: 18,
                  marginLeft: 10,
                  color: "#FCA37B",
                }}
              >
                Sign-Up
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;
