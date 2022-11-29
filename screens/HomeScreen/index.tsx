import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import ProductItem from '../../components/ProductItem';
import products from '../../assets/data/products';
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
export default HomeScreen;
