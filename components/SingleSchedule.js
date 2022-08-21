import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ArialBoldText, ArialText } from './Text'

export default function SingleSchedule(props) {
  return (
    <View style={styles.container}>
      <ArialText style={{backgroundColor:'orange',}}>8:00 AM</ArialText>
      <TextInput
        style={styles.inputContainer}
        placeholder='Chill'
        
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        
    },
    inputLabel:{
        paddingTop:20
    },
    inputContainer:{
        backgroundColor:'green',
        borderStyle:'solid',
        borderBottomWidth: 2,
        borderColor:'red',
        width:200,
        textAlignVertical:'bottom',
    }
})