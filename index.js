import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Navigator, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Main from './app/scene/main';
import Register1 from './app/scene/register1';
import Register2 from './app/scene/register2';
import Register3 from './app/scene/register3';

const App = StackNavigator({
	Main: { screen: Main },
	Register1: { screen: Register1 },
	Register2: { screen: Register2 },
	Register3: { screen: Register3 }
});

AppRegistry.registerComponent('fishackthon', () => App);