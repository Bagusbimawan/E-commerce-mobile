import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome6,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Avatar, Button } from "react-native-magnus";
import BoxProfile from "../../../components/BoxProfile";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Profile = ({ navigation }) => {
  return (
    <>
      <Pressable onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={28}
          color="black"
          style={{ marginTop: 60, marginLeft: 15 }}
        />
      </Pressable>

      <View style={{ display: "flex", alignItems: "center" }}>
        <Avatar bg="red300" size={130} color="white">
          <FontAwesome name="user" size={65} color="white" />
        </Avatar>
        <Text style={{ textAlign: "center", fontSize: 28 }}>User</Text>
      </View>

      <View style={{ marginTop: 60 }}>
        <BoxProfile
          back={<FontAwesome name="chevron-right" size={30} color="black" />}
          text="My Profile"
          Icon={<Feather name="user" size={30} color="black" />}
          onPress={() => navigation.navigate("myprofile")}
        />
        <BoxProfile
          back={<FontAwesome name="chevron-right" size={30} color="black" />}
          text="My Order"
          Icon={<FontAwesome6 name="paper-plane" size={30} color="black" />}
          onPress={() => navigation.navigate("myorder")}
        />
        <BoxProfile
          back={<FontAwesome name="chevron-right" size={30} color="black" />}
          text="Notification"
          Icon={<MaterialIcons name="notifications" size={30} color="black" />}
          onPress={() => navigation.navigate("notification")}
        />
        <BoxProfile
          back={<FontAwesome name="chevron-right" size={30} color="black" />}
          text="Setting"
          Icon={<Ionicons name="settings-outline" size={30} color="black" />}
          onPress={() => navigation.navigate("setting")}
        />
        <View>
          <Button
            w={wp(90)}
            h={hp(7)}
            ml={16}
            fontSize={19}
            mt={70}
            bg="#FCA37B"
          >
            Logout
          </Button>
        </View>
      </View>
    </>
  );
};

export default Profile;
