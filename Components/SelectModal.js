import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';

//Data
import items from '../Data/data';

export default class SelectModal extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      id: '',
    };
  }
  controlModal = (id) => {
    this.setState({
      modalVisible: !this.state.modalVisible,
      id: id,
    });
  };

  deleteItem = (id) => {
    this.controlModal();
    Alert.alert(
      'Xóa 1 item',
      'Bạn có muốn xóa không ?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Xóa',
          onPress: () => {
            const index = items.findIndex((item) => item.id === id);
            items.splice(index, 1);
            this.props.refreshScreen();
          },
        },
      ],
      {cancelable: false},
    );
  };

  editModal = (id) => {
    this.controlModal();
    console.log('Edit item ' + id);
    this.props.editModal(id);
  };

  render() {
    const {id} = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}>
        <View style={styles.centeredModal}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.openButton}
              onPress={() => this.editModal(id)}>
              <Text style={styles.textStyle}> Chỉnh sửa </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.openButton}
              onPress={() => this.deleteItem(id)}>
              <Text style={styles.textStyle}> Xóa </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.openButton}
              onPress={() => this.controlModal()}>
              <Text style={styles.textStyle}> Cancel </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredModal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#2196f3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
