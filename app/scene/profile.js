import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, TouchableHighlight} from 'react-native';
import {userStatus} from '../network/network';

const hotcode = {
  ciNum: '12345687',
  name: 'TestName',
  sex: 'M',
  birth: '2012-11-16',
  occupation: 'FACTORY',
  regNo: '12345',
  creatDate: '2017-08-03',
  exprieDate: '2021-08-02'
};

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

  renderOkBtn(text) {
    console.log(text)
    return (
      <TouchableOpacity
        style={{backgroundColor: '#93cddd', width: 100, height: 100, justifyContent: 'center', alignItems: 'center'}} >
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

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <View style={{width: 220, height: 280, backgroundColor: 'red'}}>
          </View>
          <Text>CI No.{hotcode.ciNum}</Text>
        </View>
        <View style={{marginLeft: 20, top: -10}}>
          <Text style={styles.text}>Name</Text>
          <Text style={styles.text2}>{hotcode.name}</Text>
          <Text style={styles.text}>Sex</Text>
          <Text style={styles.text2}>{hotcode.sex}</Text>
          <Text style={styles.text}>Date of Birth</Text>
          <Text style={styles.text2}>{hotcode.birth}</Text>
          <Text style={styles.text}>Father Name</Text>
          <Text style={styles.text2}>{'NO DATA'}</Text>
          <Text style={styles.text}>Occupation</Text>
          <Text style={styles.text2}>{hotcode.occupation}</Text>
        </View>
        <View style={{marginLeft: 40}}>
          <Text style={styles.text}>Reg No.</Text>
          <Text style={styles.text2}>{hotcode.regNo}</Text>
          <Text style={styles.text}>Date of Issue</Text>
          <Text style={styles.text2}>{hotcode.creatDate}</Text>
          <Text style={styles.text}>Date of Expiry</Text>
          <Text style={styles.text2}>{hotcode.exprieDate}</Text>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', right: 10, top: 0}}
          onPress={()=>navigate('Main')} >
          <Text style={{fontSize: 40, color: 'red'}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 18,
    color: 'black'
  },
  text2: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 8
  }
});