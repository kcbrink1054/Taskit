import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ArialBoldText } from './Text'
import { NEONCOLOR } from './constants'

export default function Input(props) {
  return (
    <View style={styles.container}>
      <ArialBoldText style={styles.title}>{props.name}</ArialBoldText>
      <TextInput
        style={styles.input}
        value={props.value}
        onChangeText={props.setValue}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:35
    },
    title:{
        paddingLeft:3
    },
    input: {
        borderColor:NEONCOLOR,
        backgroundColor:'#0F3031',
        borderWidth:2,
        height:45,
        borderRadius:8,
        marginTop:10,
        paddingLeft:15,
        color:'white',
        width:'100%',
        fontSize:18
    }
})