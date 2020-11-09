import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;

function Item({item, controlModal}) {
  return (
    <TouchableOpacity style={styles.itemHolder} onPress={controlModal}>
      <Image
        source={require('../Image/laptop.jpg')}
        style={styles.imageHolder}></Image>
      <View style={styles.information}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}$</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemHolder: {
    width: deviceWidth * 0.45,
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'column',
  },
  imageHolder: {
    height: 100,
    width: '100%',
    backgroundColor: '#ddd',
    resizeMode: 'cover',
  },
  information: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#000',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// const styles = StyleSheet.create({
//   itemHolder: {
//     backgroundColor: '#fff',
//     marginVertical: 5,
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//   },
//   imageHolder: {
//     height: 70,
//     width: 70,
//     backgroundColor: '#ddd',
//     resizeMode: 'cover',
//   },
//   information: {
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   description: {
//     fontSize: 14,
//     color: '#000',
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

export default Item;
