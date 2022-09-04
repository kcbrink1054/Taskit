import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ArialBoldText, ArialText } from './Text'
import { WHITE } from './constants'

export default function SingleSchedule(props) {
  return (
    <View style={styles.container}>
      <ArialText style={{fontSize:16,textAlignVertical: 'center', minWidth:80}}>{props.time}</ArialText>
      <TextInput
        style={styles.inputContainer}
        // placeholder='Chill'
        value={props.task}
        onChangeText={(t)=>props.onChangeTaskSchedule(t, props.time)}
        placeholderTextColor={WHITE}
        // showSoftInputOnFocus={false}
        // editable={props.edit}
        onFocus={() => props.changeSetEdit()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    inputLabel:{
        paddingTop:20
    },
    inputContainer:{
        borderStyle:'solid',
        borderBottomWidth: 2,
        borderColor:'#3E4E5E',
        width:'100%',
        textAlignVertical:'bottom',
        color:WHITE,
        fontSize:20,
        marginLeft:8,
        marginBottom:10,
        paddingBottom:5
        // paddingRight:100
    }
})