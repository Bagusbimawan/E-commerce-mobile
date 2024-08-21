import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useCardStore } from "../context/card";

const Card = ({ title, imageUrl, price }) => {
  const addcard = useCardStore((state) => state.addcard);

  const handlecard = () => {
    const newcard = { title, imageUrl, price };
    addcard(newcard);
  };

  return (
    <View
      style={{
        width: wp(40),
        height: hp(42),
        backgroundColor: "#FAF9F6",
        marginLeft: 10,
        borderRadius: 14,
        marginRight: 10,
        padding: 10,
      }}
    >
      <Image
        source={{ uri: imageUrl }}
        style={{
          width: wp(30),
          height: hp(15),
          alignSelf: "center",
          borderRadius: 10,
        }}
      />
      <Text style={{ fontSize: 14, fontWeight: "500", marginTop: 28 }}>
        {title}
      </Text>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
      >
        <Text style={{ fontSize: 17, fontWeight: "500", marginRight: 10 }}>
          {price} $
        </Text>
        <View
          style={{
            width: wp(10),
            height: wp(10),
            backgroundColor: "#FCA37B",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginLeft: 6,
          }}
        >
          <TouchableOpacity>
            <Pressable onPress={handlecard}>
              <FontAwesome5 name="cart-plus" size={20} color="white" />
            </Pressable>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Card;
