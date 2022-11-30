import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import styles from './styles';
import product from '../../assets/data/product';

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>
        from {product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
    </SafeAreaView>
  );
};

export default ProductScreen;
