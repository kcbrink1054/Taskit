import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ArialBoldText, ArialText } from './Text'
import { WHITE } from './constants'

export default function SingleSchedule(props) {
  const onTimeClick = () => {
    let mins = 0
    if (props.nextTimeSlot !== null) {
      switch (props.currentTimeSlot.minutes) {
        case 0:
          if(props.nextTimeSlot.minutes === 15) return
          mins = 15
          break;
        case 30:
          if(props.nextTimeSlot.minutes === 45) return
          mins = 45
          break;
        default:
          return
      }
      props.insertTaskScheduleRow({
        hours: props.currentTimeSlot.hours,
        minutes: mins
      }, props.index)
    }
    
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> onTimeClick()}>
        <ArialText style={{fontSize:16,textAlignVertical: 'center', minWidth:80, paddingVertical:8}}>{props.time}</ArialText>
      </Pressable>
      <TextInput
        style={styles.inputContainer}
        value={props.task}
        onChangeText={(t)=>props.onChangeTaskSchedule(t, props.time)}
        placeholderTextColor={WHITE}
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
        
        textAlignVertical:'bottom',
        color:WHITE,
        fontSize:20,
        marginLeft:8,
        marginBottom:10,
        paddingBottom:5,
        flex: 1,
        flexWrap:'wrap'
        
    }
})