import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Image, Alert} from 'react-native';
import {sendVerCode, register} from '../network/network';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageSource: this.props.navigation.state.params.imageSource,
      base64Image: this.props.navigation.state.params.base64Image,
      name: this.props.navigation.state.params.name,
      pwd: this.props.navigation.state.params.pwd,
      nation: this.props.navigation.state.params.nation,
      sex: this.props.navigation.state.params.sex,
      birthday: this.props.navigation.state.params.birthday,
      phone: null,
      verCode: '',
      sendVerCode: -1
    }
  }

  static navigationOptions = {
    header: null,
  };

  async wantToRegister() {
    const { navigate } = this.props.navigation;
    var res = await register(this.state.phone, this.state.verCode, this.state.name, this.state.pwd, this.state.birthday, this.state.nation, '', this.state.base64Image);
    console.log(res.status);
    if (res.status == 1) {
      Alert.alert(
        'Registration complete',
        '',
        [
          {text: 'OK', onPress: () => navigate('Login')},
        ]
      );
    } else if (res.status == 0) {
      Alert.alert(
        'Register faild',
        'Missing field(s)',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    } else if (res.status == 2) {
      Alert.alert(
        'Register faild',
        'Account already exist',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    } else if (res.status == 3) {
      Alert.alert(
        'Register faild',
        'Phone verification code is expire or non-exist',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    } else if (res.status == 4) {
      Alert.alert(
        'Register faild',
        'Wrong phone verification code',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    } else {
      Alert.alert(
        'Register faild',
        'I don not know why you register faild',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    }
  }

  async sendPhoneCode() {
    let res = await sendVerCode(this.state.phone);
    console.log('res = ' + res);
    this.setState({sendVerCode: res.status});
    if (res.status == 0) {
      Alert.alert(
        'Send verification code success',
        'enter verification code and press done',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]
      );
    } else {
      Alert.alert(
        'Send verification code faild',
        '',
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
        <View style={{backgroundColor: '#93cddd', width: '100%', height: 50}} />
        <View>
          <Text>Let me check you are not bot</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={this.state.imageSource} style={{width: 120, height: 150}} />
          <View style={{marginLeft: 10}}>
            <Text>Name: {this.state.name}</Text>
            <Text>Sex: {this.state.sex}</Text>
            <Text>Birthday: {this.state.birthday}</Text>
            <Text>Nation: {this.state.nation}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            placeholder="+886912345678"
            phone-pad
            underlineColorAndroid="transparent"
            style={{width: 220, backgroundColor: '#93cddd'}}
            onChangeText={(text) => this.setState({phone: text})}
            value={this.state.phone} />
          <TouchableOpacity
            style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}}
            onPress={this.sendPhoneCode.bind(this)} >
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Verification code"
          underlineColorAndroid="transparent"
          editable={this.state.sendVerCode == 0}
          style={{width: 270, backgroundColor: '#93cddd'}}
          onChangeText={(text) => this.setState({verCode: text})}
          value={this.state.verCode} />
        <TouchableOpacity
          style={{width: 80, height: 50, alignItems: 'center', justifyContent: 'center'}}
          onPress={this.wantToRegister.bind(this)} >
          <Text>Done</Text>
        </TouchableOpacity>
        <View style={{height: 50}} />
        <View style={{backgroundColor: '#93cddd', width: '100%', height: 50}} />
      </KeyboardAvoidingView>
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