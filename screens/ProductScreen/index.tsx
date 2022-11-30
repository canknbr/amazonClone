import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import product from '../../assets/data/product';
import { Picker } from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null
  );
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}
      >
        {product.options.map(option => (
          <Picker.Item
            key={option}
            label={option}
            value={option}
            selected={option === selectedOption}
          />
        ))}
      </Picker>
      <Text style={styles.price}>
        from {product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <View>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          text="Add to Cart"
          onPress={() => console.warn('Add to Cart')}
          containerStyle={{ backgroundColor: '#e3c905' }}
        />
        <Button
          text="Buy Now"
          onPress={() => console.warn('Buy Now')}
          variant="primary"
        />
      </View>
    </View>
  );
};

export default ProductScreen;
