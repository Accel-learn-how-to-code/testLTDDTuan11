import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const deviceWidth = Dimensions.get('window').width;

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.titleHolder}>
          <Text style={styles.title}>
            Laptop Store
          </Text>
        </View>
        <TouchableOpacity
          style={styles.iconHolder}
          onPress={this.props.controlModal}>
          <Icon name="ellipsis-vertical" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: deviceWidth,
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#2196f3',
  },
  iconHolder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 5,
  },
  titleHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 0.4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
