import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import ProductItem from '../../components/ProductItem';
import products from '../../assets/data/products';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
        contentContainerStyle={{ padding: 10 }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
