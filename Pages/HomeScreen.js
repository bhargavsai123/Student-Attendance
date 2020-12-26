import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
import AppHeader from '../components/AppHeader';
import View1 from '../components/AssetExample';
import { Header, Icon } from 'react-native-elements';
import firebase from 'firebase';
var database = firebase.database();
var present;
var p = database.ref('Total/Present').on('value', (data) => {
  present = data.val()
});
var absent;
var a = database.ref('Total/Absent').on('value', (data) => {
  absent = data.val()
});


export default class HomeScreen extends React.Component {
  submit() {
    Alert.alert(
      "Today's Attendance",
      'Present : ' + present + '\nAbsent : ' + absent,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }
  render() {
    return (
      <View>
        <AppHeader Text={'Student Attendance'} />
        <ScrollView style={{ backgroundColor: '#AFFFFF' }}>
          <View1 letter={'A'} num={'1'} />
          <View1 letter={'B'} num={'2'} />
          <View1 letter={'C'} num={'3'} />
          <View1 letter={'D'} num={'4'} />
          <View1 letter={'E'} num={'5'} />
          <View1 letter={'F'} num={'6'} />
          <View1 letter={'G'} num={'7'} />
          <View1 letter={'H'} num={'8'} />
          <View1 letter={'I'} num={'9'} />
          <View1 letter={'J'} num={'10'} />
          <TouchableOpacity
            style={{
              backgroundColor: '#00a8f3',
              width: '95%',
              borderRadius: 10,
              marginTop: '5%',
              alignSelf: 'center',
              marginBottom: '25%',
            }}
            onPress={this.submit}>
            <Text
              style={{
                color: 'white',
                padding: 20,
                fontSize: 26,
                fontFamily: 'raleway',
                textAlign: 'center',
              }}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
