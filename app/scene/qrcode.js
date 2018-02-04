import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, TouchableHighlight} from 'react-native';

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
        <Text style={{position: 'absolute', top: 90, fontSize: 18, color: 'red'}}>QR CODE</Text>
        <View style={{width: 300, height: 300, backgroundColor: 'red'}}>
        </View>
        <TouchableOpacity
          style={{position: 'absolute', bottom: 40}}
          onPress={()=>navigate('Main')} >
          <Text style={{fontSize: 40, color: 'gray'}}>Back</Text>
        </TouchableOpacity>
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
  }
});