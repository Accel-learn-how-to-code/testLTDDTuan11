import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
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
    width: '100%',
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#2196f3',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconHolder: {
    marginRight: 5,
  },
});
