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
    this.state={
      username:"",
      password:""
    }
    this.submit=this.submit.bind(this);
  }
  submit(){
    var username=this.state.username;
    var password=this.state.password;
    if(username==""||password==""){
      alert("Empty Username or password");
      Vibration.vibrate();
    }
    else{
      fetch('http://192.168.86.88:4131/v1/user', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                  username: username,
                  password: password,
                })
      }).then(function(response) {
        if(response.ok){
          alert("Yay you are user of this app");
        }
        else{
          alert("You are not");
        }
      })

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{width:300}} value={this.state.username} onChangeText={(text)=>{this.setState({username:text})}} placeholder="Username" />
        <TextInput style={{width:300}} value={this.state.password} onChangeText={(text)=>{this.setState({password:text})}} secureTextEntry={true} placeholder="Password"/>
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
