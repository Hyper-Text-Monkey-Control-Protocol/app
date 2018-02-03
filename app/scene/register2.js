import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Image, Picker, DatePickerAndroid } from 'react-native';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageSource: this.props.navigation.state.params.imageSource,
      base64Image: this.props.navigation.state.params.base64Image,
      name: '',
      pwd: '',
      nation: 'Taiwan',
      sex: 'M',
      birthday: '2018-02-04',
      chooseDay: new Date(2018, 2, 4)
    }
  }

  static navigationOptions = {
    header: null,
  };

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction) {
        var date = new Date(year, month, day), d = new Date(year, month, day+1);
        this.setState({
          birthday: d.toISOString().slice(0, 10),
          chooseDay: date
        });
      }
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding" >
        <View style={{backgroundColor: '#93cddd', width: '100%', height: 50}} />
        <View>
          <Text>Please fill your basic infomation</Text>
        </View>
        <Image source={this.state.imageSource} style={{width: 120, height: 150}} />
        <TextInput
          placeholder="Name"
          underlineColorAndroid="transparent"
          style={{width: 220, backgroundColor: '#93cddd'}}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name} />
        <TextInput
          placeholder="Password"
          password
          underlineColorAndroid="transparent"
          style={{width: 220, backgroundColor: '#93cddd'}} 
          onChangeText={(text) => this.setState({pwd: text})}
          value={this.state.pwd} />
        <TextInput
          placeholder="Nation"
          underlineColorAndroid="transparent"
          editable={false}
          style={{width: 220, backgroundColor: '#93cddd'}}
          onChangeText={(text) => this.setState({nation: text})}
          value={this.state.nation} />
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{width: 45, height: 30, backgroundColor: '#93cddd', justifyContent: 'center', alignItems: 'center'}}
            onPress={()=>this.setState({sex:(this.state.sex == 'M' ? 'F' : 'M')})} >
            <Text>{this.state.sex}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginLeft: 10, width: 165, height: 30, backgroundColor: '#93cddd', justifyContent: 'center', alignItems: 'center'}}
            onPress={this.showPicker.bind(this, 'simple', {date: this.state.chooseDay, maxDate: new Date()})} >
            <Text>{this.state.birthday}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{width: 80, height: 50, alignItems: 'center', justifyContent: 'center'}}
          onPress={()=>navigate('Register3', {
            imageSource: this.state.imageSource,
            base64Image: this.state.base64Image,
            name: this.state.name,
            pwd: this.state.pwd,
            nation: this.state.nation,
            sex: this.state.sex,
            birthday: this.state.birthday
          })} >
          <Text>Next</Text>
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
    backgroundColor: '#FFFFFF'
  },
});