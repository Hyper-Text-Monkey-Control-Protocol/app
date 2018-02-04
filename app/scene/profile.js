import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, TouchableHighlight, Image} from 'react-native';

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
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{position: 'absolute', top: 150, fontSize: 18, color: 'red'}}>Overseas Worker Indentification Card</Text>
        <View>
          <View style={{}}>
            <Image source={{uri: 'data:image/jpg;base64,'+this.props.navigation.state.params.profile.photo}}
              style={{width: 156, height: 195}} />
          </View>
          <Text>CI No.{this.props.navigation.state.params.profile.sid}</Text>
        </View>
        <View style={{marginLeft: 20, top: -10}}>
          <Text style={styles.text}>Name</Text>
          <Text style={styles.text2}>{this.props.navigation.state.params.profile.name}</Text>
          <Text style={styles.text}>Sex</Text>
          <Text style={styles.text2}>{this.props.navigation.state.params.profile.sex}</Text>
          <Text style={styles.text}>Date of Birth</Text>
          <Text style={styles.text2}>{this.props.navigation.state.params.profile.birth}</Text>
          <Text style={styles.text}>Father Name</Text>
          <Text style={styles.text2}>{'Yee'}</Text>
          <Text style={styles.text}>Occupation</Text>
          <Text style={styles.text2}>{hotcode.occupation}</Text>
        </View>
        <View style={{marginLeft: 20}}>
          <Text style={styles.text}>Reg No.</Text>
          <Text style={styles.text2}>{hotcode.regNo}</Text>
          <Text style={styles.text}>Date of Issue</Text>
          <Text style={styles.text2}>{hotcode.creatDate}</Text>
          <Text style={styles.text}>Date of Expiry</Text>
          <Text style={styles.text2}>{hotcode.exprieDate}</Text>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', bottom: 40}}
          onPress={()=>navigate('Main', {profile: this.props.navigation.state.params.profile})} >
          <Text style={{fontSize: 40, color: 'gray'}}>Back</Text>
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
    fontSize: 12,
    color: 'black'
  },
  text2: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 2
  }
});