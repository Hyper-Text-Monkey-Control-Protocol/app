import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Image, PermissionsAndroid } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {uploadImg} from '../network/network';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageSource: '',
      base64Image: ''
    }
  }

  static navigationOptions = {
    header: null,
  };

  renderImage() {
    if (this.state.imageSource == '') {
      return (
        <View>
          <Text>+</Text>
          <Text>Select from album</Text>
        </View>
      );
    } else {
      return (
        <Image source={this.state.imageSource} style={{width: 300, height:300}} />
      )
    }
  }

  async chooseImage() {
    console.log('choose image!');
    var options = {
      title: 'Choose your photo',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else {
        let source = { uri: response.uri };
        this.setState({
          imageSource: source,
          base64Image: response.data
        });
      }
    });
  }

  async uploadImage(url) {
    let data = await uploadImg(url);
    console.log('data = ' + data);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#93cddd', width: '100%', height: 50, alignSelf: 'flex-start'}} />
        <View>
          <Text>Upload your profile.</Text>
        </View>
        <TouchableOpacity
          style={{borderWidth: 1, borderColor: '#93cddd', width: 300, height: 300, alignItems: 'center', justifyContent: 'center'}}
          onPress={this.chooseImage.bind(this)}
          >
          { this.renderImage() }
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 80, height: 50, alignItems: 'center', justifyContent: 'center'}}
          >
          <Text>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 80, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue'}}
          onPress={()=>this.uploadImage(this.state.base64Image)}>
          <Text>UPLOAD</Text>
        </TouchableOpacity>
        <View style={{backgroundColor: '#93cddd', width: '100%', height: 50, alignSelf: 'flex-end'}} />
      </View>
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