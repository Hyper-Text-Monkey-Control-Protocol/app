import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChoose: false,
      imageSource: ''
    }
  }

  static navigationOptions = {
    header: null,
  };

  renderImage() {
    if (!this.state.isChoose) {
      return (
        <View>
          <Text>+</Text>
          <Text>Select from album</Text>
        </View>
      );
    } else {
      return (
        <Image style={{width: 300, height:300}} />
      )
    }
  }

  chooseImage() {
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

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          imageSource: source
        });
      }
    });
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
          onPress={this.chooseImage}
          >
          { this.renderImage() }
        </TouchableOpacity>
        <TouchableOpacity style={{width: 80, height: 50, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Next</Text>
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