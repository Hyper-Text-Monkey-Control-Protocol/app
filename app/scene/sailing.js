import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, TouchableHighlight, Alert} from 'react-native';

var TimeOut = null;
var showArr = [];

const hotcode = {
  sailingState: true,
  sailingTime: new Date('2018-02-04T00:52:29.408Z')
};

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sailing: hotcode.sailingState,
      dateDiff: new Date() - hotcode.sailingTime
    }
  }

  componentWillMount() {
    showArr = this.countTime();
    TimeOut = () => {
      this.setState({dateDiff: new Date() - hotcode.sailingTime});
      showArr = this.countTime();
      setTimeout(TimeOut, 1000);
    };
    TimeOut();
  }

  componentWillUnmount() {
    clearTimeout(TimeOut);
  }

  static navigationOptions = {
    header: null,
  };

  updateSailingState(sailing) {
    this.setState({ sailing: sailing })
  }

  changeSailingState(sailing=true) {
    if (sailing != this.state.sailing) {
      Alert.alert(
        'Are you really ' + (sailing ? 'to sailing' : 'to back') + '?',
        '',
        [
          {text: 'really', onPress: this.updateSailingState.bind(this, sailing)},
          {text: 'no', onPress: () => {}}
        ]
      );
    }
  }

  countTime() {
    var date3 = this.state.dateDiff
    var days=Math.floor(date3/(24*3600*1000))  
    //计算出小时数  
      
    var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数  
    var hours=Math.floor(leave1/(3600*1000))  
    //计算相差分钟数  
    var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数  
    var minutes=Math.floor(leave2/(60*1000))  
    //计算相差秒数  
    var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数  
    var seconds=Math.round(leave3/1000)
    return [days, hours, minutes, seconds];
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{width: 200, height: 50, flexDirection: 'row'}}>
          <TouchableOpacity
            style={{flex: 1, backgroundColor: this.state.sailing ? '#93cddd' : 'gray', justifyContent: 'center', alignItems: 'center'}}
            onPress={this.changeSailingState.bind(this)} >
            <Text style={{color: 'black'}}>Sailing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 1, backgroundColor: this.state.sailing ? 'gray' : '#93cddd', justifyContent: 'center', alignItems: 'center'}}
            onPress={this.changeSailingState.bind(this, false)} >
            <Text style={{color: 'black'}}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>{this.state.sailing ? 'You start sailing when' : '上次出航是'}</Text>
          <Text>{hotcode.sailingTime.toUTCString()}</Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>{this.state.sailing ? '本次出航你已航行' : '距離上次出航經過'}</Text>
          <Text>
            {showArr[0]}D/
            {showArr[1]}H:
            {showArr[2]}M:
            {showArr[3]}S
          </Text>
        </View>
        <TouchableOpacity
          style={{}}
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
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  }
});