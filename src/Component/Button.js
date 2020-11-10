import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import { Heading } from './Styles';

export const Button = (props) => {
    return(
        <TouchableOpacity style={styles.Button}
        onPress= {props.onPress}>
        <Text style={styles.text}>
          {props.Text}
        </Text>
      </TouchableOpacity>
    )
}

export const SubHeading = (props) => {
    return (
        <Text style={[Heading,styles.subText]}>
            {props.SubHeading} :
        <Text style={styles.text3}>{" "} {props.value}</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    Button:{
      width:'60%',
      height:50,
      borderRadius:8,
      backgroundColor:'black',
      justifyContent:'center',
      alignItems:'center'
    },
    text:{
      color:'white',
      fontSize:14,
      fontWeight:'bold',
      textAlign:'center'
    },
    subText:{
        textAlign: 'left', marginLeft: 20, marginTop: 10
    },
    text3:{
        fontSize: 14, fontWeight: '500', marginHorizontal: 10 
    }
  });
  