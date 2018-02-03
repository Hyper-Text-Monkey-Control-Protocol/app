import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, TouchableHighlight} from 'react-native';
import {userStatus} from '../network/network';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userStatus: "Waiting for server"
    }
  }

  static navigationOptions = {
    header: null,
  };

  async userStatusText() {
    var res = await userStatus();
    if (res.status == 200) {
      this.setState({userStatus: "Approved"});
    } else {
      this.setState({userStatus: "Pending"});
    }
  }

  componentWillMount() {
    this.userStatusText();
  }

  renderOkBtn(text, func) {
    console.log(text)
    return (
      <TouchableOpacity
        style={{backgroundColor: '#93cddd', width: 100, height: 100, justifyContent: 'center', alignItems: 'center'}}
        onPress={func} >
        <Text style={styles.textMid}>{text}</Text>
      </TouchableOpacity>
    );
  }

  renderFailBtn(text) {
    return (
      <TouchableHighlight
        style={{backgroundColor: 'gray', width: 100, height: 100, justifyContent: 'center', alignItems: 'center'}} >
        <Text style={styles.textMid}>{text}</Text>
      </TouchableHighlight>
    );
  }

  goProfile() {
    const { navigate } = this.props.navigation;
    navigate('Profile');
  }

  goQrcode() {
    const { navigate } = this.props.navigation;
    navigate('Qrcode');
  }

  goSailing() {
    const { navigate } = this.props.navigation;
    navigate('Sailing');
  }

  goStatistic() {
    const { navigate } = this.props.navigation;
    navigate('Statistics');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{position: 'absolute', left: 10, top: 10}}>
          <Text style={{fontSize: 25}}>Fishackthon</Text>
        </View>
        <View style={{position: 'absolute', right: 10, top: 25}}>
          <Text style={{fontSize: 10}}>Hyper Text Monkey Control Protocol</Text>
        </View>
        <View style={{margin: 40}}>
          <Text style={{fontSize: 50, color: this.state.userStatus == "Approved" ? 'green' : 'red'}}>{this.state.userStatus}</Text>
        </View>
        <View style={{width: 250, height: 150, flexDirection: 'row', flexWrap: 'wrap' ,justifyContent: 'space-between', alignItems: 'center'}}>
          { this.state.userStatus == "Approved" ? this.renderOkBtn("Profile", this.goProfile.bind(this)) : this.renderFailBtn("Profile") }
          { this.state.userStatus == "Approved" ? this.renderOkBtn("QR CODE", this.goQrcode.bind(this)) : this.renderFailBtn("QR CODE") }
        </View>
        <View style={{width: 250, height: 150, flexDirection: 'row', flexWrap: 'wrap' ,justifyContent: 'space-between', alignItems: 'center'}}>
          { this.renderOkBtn('Sailing', this.goSailing.bind(this)) }
          { this.renderOkBtn('Statistics', this.goStatistic.bind(this)) }
        </View>
        
      </View>
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
  textMid: {
    fontSize: 20
  }
});