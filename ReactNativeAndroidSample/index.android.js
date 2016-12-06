/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Vibration
} from 'react-native';

export default class ReactNativeAndroidSample extends Component {
  constructor(){
    super();
    this.submit=this.submit.bind(this);
  }
  submit(){
    var username=this.refs['username'].value||"";
    var password=this.refs['password'].value||"";
    var x=JSON.stringify(this.refs['username']);
    alert(x);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput ref="username" style={{width:300}} placeholder="Username" />
        <TextInput ref="password" style={{width:300}} secureTextEntry={true} placeholder="Password"/>
        <Button title="Submit" onPress={this.submit}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:200,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

AppRegistry.registerComponent('ReactNativeAndroidSample', () => ReactNativeAndroidSample);
