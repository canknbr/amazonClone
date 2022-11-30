import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  useWindowDimensions,
} from 'react-native';
import { useState } from 'react';

const CarouselImage = ({ image }: { image: [string] }) => {
  const width = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = useState(0);
  {
    return (
      <View style={styles.root}>
        <FlatList
          data={image}
          renderItem={({ item }) => (
            <Image
              style={[
                styles.image,
                {
                  width: width - 40,
                },
              ]}
              source={{ uri: item }}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 40}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
        />
        <View style={styles.dots}>
          {image.map((image, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === activeIndex ? '#c9c9c9' : '#ededed',
                },
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
  },
  image: {
    height: 250,
    resizeMode: 'contain',
    margin: 10,
  },
  dots: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    margin: 5,
  },
});
export default CarouselImage;
