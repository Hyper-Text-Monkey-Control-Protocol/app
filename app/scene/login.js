import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Alert, Image } from 'react-native';
import {login} from '../network/network';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: ''
    }
  }

  static navigationOptions = {
    header: null,
  };

  async wantToLogin() {
    console.log('send pwd: ' + this.state.password)
    var res = await login(this.state.phone, this.state.password);
    console.log('res = ' + JSON.stringify(res));
    if (res.status == 0) {
      const { navigate } = this.props.navigation;
      navigate('Main', {profile: res.res});
    } else {
      Alert.alert(
        'Login faild',
        'phone number or password not correct',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding" >
        <View style={styles.logo}>
          <Image source={require('./logo.jpg')} style={{width: 214, height: 72}} />
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 60, alignItems: 'center'}}>
              <Text>手機</Text>
            </View>
            <TextInput
              placeholder="0912345678"
              style={{width: 220, marginRight: 20}}
              onChangeText={(text) => this.setState({phone: text})}
              value={this.state.phone}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{width: 60, alignItems: 'center'}}>
              <Text>密碼</Text>
            </View>
            <TextInput
              placeholder="password"
              secureTextEntry
              style={{width: 220, marginRight: 20}}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity
            style={{width: 80, height: 50, alignItems: 'center', justifyContent: 'center'}}
            onPress={()=>navigate('Register1', {name: 'register1'})}
          > 
            <Text>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: 80, height: 50, alignItems: 'center', justifyContent: 'center'}}
            onPress={this.wantToLogin.bind(this)}
          >
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
    backgroundColor: '#FFFFFF',
  },
  logo: {
    backgroundColor: 'transparent',
    height: 250,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
});