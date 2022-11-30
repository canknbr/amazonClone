import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
interface IQuantitySelectorProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}
const QuantitySelector = ({
  quantity,
  setQuantity,
}: IQuantitySelectorProps) => {
  const onMinus = () => {
    setQuantity(prev => (prev > 0 ? prev - 1 : 0));
  };
  const onPlus = () => {
    setQuantity(prev => prev + 1);
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    width: 120,
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d1d1d1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
  quantity: {
    marginHorizontal: 20,
    fontSize: 18,
    color: '#007eb9',
  },
});

export default QuantitySelector;
