import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from 'react-native';
const deviceWidth = Dimensions.get('window').width;

//Data
import items from '../Data/data';

export default class EditModal extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      id: '',
      title: '',
      description: '',
      price: '',
    };
  }

  controlModal = (id) => {
    //console.log('Edit modal is open ' + id);
    this.setState({
      modalVisible: !this.state.modalVisible,
      id: id,
    });

    const index = items.findIndex((item) => item.id === id);
    this.setState({
      title: items[index].title,
      description: items[index].description,
      price: JSON.stringify(items[index].price),
    });
  };

  editItem = () => {
    const {title, description, price, id} = this.state;
    const index = items.findIndex((item) => item.id === id);

    items[index].title = title;
    items[index].description = description;
    items[index].price = Number(price);

    this.setState({
      modalVisible: !this.state.modalVisible,
    });
    this.props.refreshScreen();
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}>
        <View style={styles.centeredModal}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              placeholder="Title"
              onChangeText={(text) => this.setState({title: text})}
              value={this.state.title}
            />

            <TextInput
              style={styles.input}
              placeholder="Description"
              onChangeText={(text) => this.setState({description: text})}
              value={this.state.description}
            />

            <TextInput
              style={styles.input}
              placeholder="Price"
              onChangeText={(text) => this.setState({price: text})}
              value={this.state.price}
            />

            <View style={styles.buttonHolder}>
              <TouchableOpacity
                style={styles.openButton}
                onPress={() => this.editItem()}>
                <Text style={styles.textStyle}> Sửa </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.openButton}
                onPress={() => this.controlModal()}>
                <Text style={styles.textStyle}> Cancel </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: deviceWidth * 0.5,
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
    flex: 1,
    backgroundColor: '#2196f3',
    borderRadius: 5,
    padding: 5,
    elevation: 2,
    margin: 3,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomColor: '#aaa',
  },
});
