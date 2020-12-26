import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>{this.props.Text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#264E86',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 26,
    fontFamily: 'raleway' ,
    textAlign: 'center',
  }
});

export default AppHeader;