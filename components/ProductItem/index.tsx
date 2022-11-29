import { View, Text, Image } from 'react-native';
import React from 'react';
interface IProductItem {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}
const ProductItem = ({ item }: IProductItem) => {
  return (
    <View>
      <Image />
      <View>
        <Text>Product Name</Text>
        <View>
          <Text>rating</Text>
        </View>
        <Text>price</Text>
      </View>
    </View>
  );
};

export default ProductItem;
