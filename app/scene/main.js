import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: ''
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding" >
        <View style={styles.logo} />
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 60, alignItems: 'center'}}>
              <Text>手機</Text>
            </View>
            <TextInput
              placeholder="0912345678"
              style={{width: 220, marginRight: 20}}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 60, alignItems: 'center'}}>
              <Text>密碼</Text>
            </View>
            <TextInput
              placeholder="password"
              style={{width: 220, marginRight: 20}}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={{width: 80, height: 50, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{width: 80, height: 50, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 20 }} />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    backgroundColor: 'red',
    height: 250,
    width: 300,
    marginBottom: 50
  }
});