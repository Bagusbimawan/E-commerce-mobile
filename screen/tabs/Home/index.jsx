import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../../../components/Search";
import Myimage from "../../../assets/images/banner1.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Card from "../../../components/Card";

const Home = () => {
  const [Api, setApi] = useState([]);
  const [Api2, SetApi2] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setApi(data.products));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => SetApi2(data));
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={{ fontSize: 28, margin: 25 }}>Hi,</Text>
        <Search />
        <View>
          <Image
            source={Myimage}
            style={{
              width: wp(90),
              height: hp(15),
              margin: 15,
              borderRadius: 5,
            }}
          />
        </View>
        <View>
          <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Api.map((item, index) => (
                <>
                  <Card
                    key={index}
                    imageUrl={item.thumbnail}
                    brand={item.brand}
                    title={item.title}
                    price={item.price}
                  />
                </>
              ))}
            </ScrollView>
          </View>
          <View style={{ marginTop: 10, marginBottom: 30 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {Api2.map((item, index) => (
                <>
                  <Card
                    key={index}
                    title={item.title}
                    price={item.price}
                    imageUrl={item.image}
                  />
                </>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
