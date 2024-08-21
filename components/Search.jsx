import { View } from "react-native";
import React from "react";
import { Input } from "react-native-magnus";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Search = () => {
  return (
    <>
      <View>
        <Input
          placeholder="Search"
          prefix={<FontAwesome5 name="search" />}
          fontSize="lg"
          w={wp(75)}
          h={hp(6)}
          ml={24}
        />
      </View>
      <View>
      
      </View>
    </>
  );
};

export default Search;
