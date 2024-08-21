import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { Input, Button } from "react-native-magnus";
import { AntDesign } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Register = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              size={28}
              color="black"
              style={{ marginTop: 60, marginLeft: 15 }}
            />
          </Pressable>
          <Text
            style={{
              fontSize: 25,
              marginTop: 55,
              marginLeft: 20,
              fontWeight: "600",
            }}
          >
            Sign-Up
          </Text>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 32,
              fontSize: 25,
              marginTop: 50,
              fontWeight: "400",
            }}
          >
            Name
          </Text>
          <Input placeholder="Username" w={wp(85)} ml={30} mt={20} />
          <Text
            style={{
              marginLeft: 32,
              fontSize: 25,
              marginTop: 20,
              fontWeight: "400",
            }}
          ></Text>
        </View>
        <View>
          <Text
            style={{
              marginLeft: 32,
              fontSize: 25,
              fontWeight: "400",
            }}
          >
            Email
          </Text>
          <Input placeholder="Username" w={wp(85)} ml={30} mt={20} />
          <Text
            style={{
              marginLeft: 32,
              fontSize: 25,
              fontWeight: "400",
            }}
          ></Text>
        </View>
        <View>
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
            placeholder="Username"
            w={wp(85)}
            ml={30}
            mt={20}
            secureTextEntry
          />
          <Text
            style={{
              marginLeft: 32,
              fontSize: 25,
              marginTop: 10,
              fontWeight: "400",
            }}
          ></Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 30,
            fontWeight: "400",
            color: "grey",
          }}
        >
          By Clicking Sign-Up You Are in Agremment Of
          <Text style={{ color: "#FCA37B" }}> Terms and Condition</Text>
        </Text>

        <Button
          w={wp(85)}
          ml={30}
          bg="#FCA37B"
          mt={30}
          h={hp(7)}
          fontSize={17}
          fontWeight="400"
        >
          Sign-Up
        </Button>
      </ScrollView>
    </>
  );
};

export default Register;
