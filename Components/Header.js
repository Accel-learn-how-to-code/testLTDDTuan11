import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
const deviceWidth = Dimensions.get('window').width;

export default class Header extends Component {
  render() {
    return (
      <>
        <View style={styles.header}>
          <View style={styles.titleHolder}>
            <Text style={styles.title}>Tiki</Text>
          </View>
          <View style={styles.inputHolder}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText(text)}
              value="Search"
            />
          </View>
          <TouchableOpacity
            style={styles.iconHolder}
            onPress={this.props.controlModal}>
            <Icon name="ellipsis-vertical" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerBottom}>
          <Text style={styles.labelInfor}>Danh mục</Text>
          <Icon name="chevron-forward-sharp" size={20} color="#fff" />
          <Text style={styles.labelInfor}>Điện thoại - Máy tính</Text>
          <Icon name="chevron-forward-sharp" size={20} color="#fff" />
          <Text style={styles.labelInfor}>Điện thoại SmartPhone</Text>
        </View>
      </>
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
    width: deviceWidth * 0.3,
  },
  inputHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 0.5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    height: 34,
    width: '100%',
    margin: 2,
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderWidth: 1,
    fontSize: 12,
  },
  headerBottom: {
    width: deviceWidth,
    height: 30,
    flexDirection: 'row',
    backgroundColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelInfor: {
    color: '#fff',
  },
});
