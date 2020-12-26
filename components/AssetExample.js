import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import db from '../config';
import firebase from 'firebase';
var database = firebase.database();
var pr;
var ab;
var pre = database.ref('Total/Present').on('value', (data) => {
  pr = data.val();
});
var abs = database.ref('Total/Absent').on('value', (data) => {
  ab = data.val();
});
class View1 extends React.Component {
  constructor() {
    super();
    this.state = {
      status: '',
    };
  }
  present = (p) => {
    this.setState({ status: 'Present' });
    database.ref('Students/Student ' + p).set({
      Status: 'Present',
    });
    if (this.state.status != 'Present') {
      database.ref('Total/').set({
        Present: pr + 1,
        Absent: ab - 1,
      });
    }
  };
  absent = (a) => {
    this.setState({ status: 'Absent' });
    database.ref('Students/Student ' + a).set({
      Status: 'Absent',
    });
    if (this.state.status != 'Absent') {
      database.ref('Total/').set({
        Present: pr - 1,
        Absent: ab + 1,
      });
    }
  };
  render() {
    return (
      <View>
        <Image style={styles.img} source={require('../assets/Student1.png')} />
        <Text style={styles.text}>Student {this.props.letter}</Text>
        <Text style={styles.texts}>Roll No. {this.props.num}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.present(this.props.letter)}>
          <Text style={styles.t}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.abutton}
          onPress={() => this.absent(this.props.letter)}>
          <Text style={styles.t}>Absent</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: '#FC5185',
    fontSize: 24,
    marginTop: -130,
    marginLeft: '22%',
    fontFamily: 'Raleway',
  },
  texts: {
    color: '#5E88FC',
    fontSize: 20,
    marginLeft: '22%',
    fontFamily: 'raleway',
  },
  button: {
    backgroundColor: 'green',
    justifyContent: 'center',
    marginLeft: '52%',
    marginTop: -52,
    marginBottom: 10,
    alignItems: 'center',
    width: 85,
    height: 55,
    borderRadius: 10,
    borderWidth: 1.25,
    borderColor: '#00a8f3',
    opacity: 1,
  },
  abutton: {
    backgroundColor: 'crimson',
    justifyContent: 'center',
    marginLeft: '76%',
    marginTop: -65,
    marginBottom: 10,
    alignItems: 'center',
    width: 85,
    height: 55,
    borderRadius: 10,
    borderWidth: 1.25,
    borderColor: '#00a8f3',
    opacity: 1,
  },
  t: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'raleway',
  },
  img: {
    width: 60,
    height: 60,
    marginLeft: '3%',
    marginTop: '5%',
    marginBottom: 70,
  },
});

export default View1;
