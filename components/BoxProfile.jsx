import { View, Text, Pressable } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BoxProfile = ({ Icon, text, back, onPress }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        width: wp(90),
        backgroundColor: "#F0FFFF",
        height: hp(8),
        marginLeft: 16,
        marginTop: 10,
        borderRadius: 10,
        alignItems: "center",
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: "grey",
      }}
    >
      <View style={{ marginRight: 10 }}>{Icon}</View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: "400" }}>{text}</Text>
      </View>
      <Pressable onPress={onPress}>
        <View>{back}</View>
      </Pressable>
    </View>
  );
};

export default BoxProfile;
