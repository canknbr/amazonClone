import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
interface IButtonProps {
  text: string;
  onPress: () => void;
  containerStyle?: any;
}
const Button = ({ text, onPress, containerStyle }: IButtonProps) => {
  return (
    <Pressable style={[styles.root, containerStyle]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default Button;
