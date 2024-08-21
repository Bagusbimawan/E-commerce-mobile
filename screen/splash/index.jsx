import { Image, View, Text, ScrollView } from "react-native";
import React from "react";
import { Button } from "react-native-magnus";
import Myimage from "../../assets/images/shopping1.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Splash = ({ navigation }) => {
  return (
    <>
      <ScrollView>
        <View>
          <Image
            source={Myimage}
            style={{ width: 415, height: 420, marginTop: 100 }}
          />
        </View>
        <View>
          <Text
            style={{ textAlign: "center", fontSize: 40, fontWeight: "600" }}
          >
            Updated Products
          </Text>
          <Text
            style={{ textAlign: "center", fontSize: 40, fontWeight: "600" }}
          >
            EveryDay
          </Text>
          <Text
            style={{
              textAlign: "center",
              marginTop: 15,
              color: "grey",
              fontSize: 20,
            }}
          >
            Don't Worry You Won't be
          </Text>
          <Text style={{ textAlign: "center", fontSize: 20, color: "grey" }}>
            Outdated
          </Text>
        </View>
        <View>
          <Button
            color="white"
            bg="#FCA37B"
            ml={60}
            mt={18}
            w={wp(65)}
            onPress={() => navigation.navigate("login")}
          >
            Next
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

export default Splash;
