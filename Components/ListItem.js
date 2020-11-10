import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const deviceWidth = Dimensions.get('window').width;

function Item({item, controlModal}) {
  return (
    <TouchableOpacity style={styles.itemHolder} onPress={controlModal}>
      <Image
        source={require('../Image/iphone.jpeg')}
        style={styles.imageHolder}></Image>
      <View style={styles.information}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.priceHolder}>
          <Text style={styles.price}>{item.price}$ &nbsp;</Text>
          <Text style={styles.smallLabel}>-23%</Text>
        </View>
        <View style={styles.iconHolder}>
          <Icon name="star" size={10} color="yellow" />
          <Icon name="star" size={10} color="yellow" />
          <Icon name="star" size={10} color="yellow" />
          <Icon name="star" size={10} color="yellow" />
          <Icon name="star-outline" size={10} color="yellow" />
        </View>
        <Text style={styles.label}>
          <Icon name="logo-usd" size={16} color="tomato" />
          Rẻ hơn hoàn tiền
        </Text>
        <Text style={styles.smallLabel}>Nhiều màu</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemHolder: {
    width: deviceWidth * 0.45,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#ddd',
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
    paddingLeft: 14,
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
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 14,
    color: 'tomato',
    fontWeight: 'bold',
  },
  smallLabel: {
    fontSize: 11,
    color: '#aaa',
  },
  iconHolder: {
    flexDirection: 'row',
  },
  priceHolder: {
    flexDirection: 'row',
    alignItems: 'center',  
  }
});

export default Item;
