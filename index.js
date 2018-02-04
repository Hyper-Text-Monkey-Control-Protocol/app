import React, { Component} from 'react';
import { AppRegistry, Text, TextInput, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView, Navigator, Button } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Login from './app/scene/login';
import Register1 from './app/scene/register1';
import Register2 from './app/scene/register2';
import Register3 from './app/scene/register3';
import Main from './app/scene/main';
import Profile from './app/scene/profile';
import Qrcode from './app/scene/qrcode';
import Sailing from './app/scene/sailing';
import Statistic from './app/scene/statistics';

const App = StackNavigator({
	Login: { screen: Login },
	Register1: { screen: Register1 },
	Register2: { screen: Register2 },
	Register3: { screen: Register3 },
	Main: { screen: Main },
	Profile: { screen: Profile },
	Qrcode: { screen: Qrcode },
	Sailing: { screen: Sailing },
	Statistic: { screen: Statistic }
});

AppRegistry.registerComponent('fishackthon', () => App);