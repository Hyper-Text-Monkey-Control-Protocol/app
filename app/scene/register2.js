import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#93cddd', width: '100%', height: 50, alignSelf: 'flex-start'}} />
        <View>
          <Text>Upload your profile.</Text>
        </View>
        <TouchableOpacity
          style={{borderWidth: 1, borderColor: '#93cddd', width: 300, height: 300, alignItems: 'center', justifyContent: 'center'}} >
          <Text>+</Text>
          <Text>Select from album</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width: 80, height: 50, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Next</Text>
        </TouchableOpacity>
        <View style={{backgroundColor: '#93cddd', width: '100%', height: 50, alignSelf: 'flex-end'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF'
  },
});