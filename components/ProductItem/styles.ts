import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginVertical: 10,
    borderWidth: 0.4,
    borderColor: '#d1d1d1',
    borderRadius: 5,
  },
  rightContainer: {
    flex: 3,
    marginLeft: 10,
    padding: 10,
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 5,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
    marginHorizontal: 20,
  },
});

export default styles;
