import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Image} from 'react-native';

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
      verCode: ''
    }
  }

  static navigationOptions = {
    header: null,
  };

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
            style={{width: 50, height: 50, justifyContent: 'center', alignItems: 'center'}} >
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Verification code"
          underlineColorAndroid="transparent"
          style={{width: 270, backgroundColor: '#93cddd'}}
          onChangeText={(text) => this.setState({nation: text})}
          value={this.state.verCode} />
        <TouchableOpacity style={{width: 80, height: 50, alignItems: 'center', justifyContent: 'center'}}>
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