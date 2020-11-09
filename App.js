import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  StatusBar,
  Modal,
  TouchableOpacity,
} from 'react-native';

//Data
import items from './Data/data';
//Components
import Header from './Components/Header';
import ListItem from './Components/ListItem';
import SelectModal from './Components/SelectModal';
import AddModal from './Components/AddModal';
import EditModal from './Components/EditModal';
import HeaderModal from './Components/HeaderModal';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      refreshScreen: 0,
    };
  }

  refreshScreen = () => {
    this.setState({
      refreshScreen: ++this.state.refreshScreen,
    });
  };

  render() {
    let itemsList = items.map((item) => {
      return (
        <ListItem
          controlModal={() => this.selectModal.controlModal(item.id)}
          item={item}
          key={item.id}
        />
      );
    });
    return (
      <>
        <Header controlModal={() => this.headerModal.controlModal()} />
        <ScrollView style={{backgroundColor: 'tomato'}}>
          <View style={styles.container}>
            {/* <FlatList
            ref={(value) => (this.flatList = value)}
            data={items}
            renderItem={({item}) => {
              return (
                <ListItem
                  controlModal={() => this.selectModal.controlModal(item.id)}
                  item={item}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          /> */}
            {itemsList}
            <HeaderModal
              ref={(value) => (this.headerModal = value)}
              addModal={() => this.addModal.controlModal()}
              refreshScreen={this.refreshScreen}
            />
            <SelectModal
              ref={(value) => (this.selectModal = value)}
              editModal={(id) => this.editModal.controlModal(id)}
              refreshScreen={this.refreshScreen}
            />
            <AddModal
              ref={(value) => (this.addModal = value)}
              refreshScreen={this.refreshScreen}
            />
            <EditModal
              ref={(value) => (this.editModal = value)}
              refreshScreen={this.refreshScreen}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 5,
  },
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'tomato',
//     padding: 5,
//   },
//   header: {
//     width: '100%',
//     flexDirection: 'row',
//     height: 40,
//     backgroundColor: '#2196f3',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   iconHolder: {
//     marginRight: 5,
//   },
// });

