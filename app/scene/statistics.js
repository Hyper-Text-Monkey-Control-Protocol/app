import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, TouchableHighlight, ScrollView} from 'react-native';

const hotcode = {
  record: [],
  over: []
};

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      record: []
    }
  }

  static navigationOptions = {
    header: null,
  };

  randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  componentWillMount() {
    hotcode.record = []
    over = []
    for(var i=0; i<10; i++) {
      hotcode.record.push([this.randomDate(new Date(2018, 1, 1), new Date(2018, 1, 2)), this.randomDate(new Date(2018, 1, 2), new Date(2018, 1, 3))]);
    }
  }

  countTime(d1, d2) {
    var date3 = d2-d1
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

  renderFirst(arr) {
    over = []
    var res = [];
    for(var i=0; i<arr.length; i++) {
      var ct = this.countTime(arr[i][0], arr[i][1]);
      res.push(<Text>{arr[i][0].toISOString().slice(0, 10) + ' / ' + ct[0] + 'D' + ct[1] + 'H' + ct[2] + 'M' + ct[3] + 'S'}</Text>);
      if (ct[1]>=6 || ct[0]>0) {
        over.push(i);
      }
    }
    return res;
  }

  renderSecond(arr, arr2) {
    var res = []
    for(var i=0; i<arr2.length; i++) {
      var ct = this.countTime(arr[arr2[i]][0], arr[arr2[i]][1]);
      res.push(<Text>{arr[arr2[i]][0].toISOString().slice(0, 10) + ' / ' + ct[0] + 'D' + ct[1] + 'H' + ct[2] + 'M' + ct[3] + 'S'}</Text>);
    }
    return res;
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 18}}>Statistics</Text>
        <View />
        <Text>一個月內出航紀錄</Text>
        {this.renderFirst(hotcode.record)}
        <View />
        <Text>一個月內超時工作紀錄</Text>
        {this.renderSecond(hotcode.record, over)}
        <TouchableOpacity
          style={{position: 'absolute', bottom: 40}}
          onPress={()=>navigate('Main', {profile: this.props.navigation.state.params.profile})} >
          <Text style={{fontSize: 40, color: 'gray'}}>Back</Text>
        </TouchableOpacity>
        <View style={{height: 40, width: '100%'}} />
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