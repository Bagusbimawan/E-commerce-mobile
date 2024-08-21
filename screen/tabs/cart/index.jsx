import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { useCardStore } from "../../../context/card";

const Cart = () => {
  const cards = useCardStore((state) => state.cards); // Mengambil data card dari store

  return (
    <View>
      <FlatList
        data={cards}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            {item.imageUrl && (
              <Image
                source={{ uri: item.imageUrl }}
                style={{ width: 100, height: 100 }}
              />
            )}
            <Text>{item.title}</Text>
            <Text>{item.price} $</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Cart;
