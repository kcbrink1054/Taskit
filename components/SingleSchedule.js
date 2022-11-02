import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { ArialBoldText, ArialText } from './Text'
import { WHITE } from './constants'
import { Picker } from "@react-native-picker/picker";
import { InputType } from './InputType';
import { Feather } from '@expo/vector-icons';

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
  const onTimePress = () => {
    props.changeSetEdit()
    onTimeClick();
  }
  const onTimeLongPress = () => {
    props.changeSetEdit()
    let inputType = ""

    switch (props.inputType) {
      case InputType.Dropdown:
        inputType = InputType.TextField     
        break;
      case InputType.TextField:
        inputType = InputType.Dropdown     
        break;
      default:
        break;
    }
    props.onChangeInputType(inputType, props.time);
  }

  const IsValueContainedInList = (value) => {
    let x = props.data.find(t => {
      return t.title === value
    })
    return (x !== undefined) ? value : ""
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> onTimePress()} onLongPress={()=> onTimeLongPress()}>
        <ArialText style={{fontSize:16, minWidth:80, paddingVertical:8}}>{props.time}</ArialText>
      </Pressable>
      { (props.inputType === InputType.Dropdown) &&
        <View style={styles.pickerContainer}>
          <Picker onValueChange={(t)=>props.onChangeTaskSchedule(t, props.time)} itemStyle={styles.pickerItem} selectedValue={IsValueContainedInList(props.task)}  style={styles.picker} mode="dropdown" dropdownIconColor={WHITE} onFocus={() => props.changeSetEdit()}>
          <Picker.Item label="" value=""/>
            {props.data.map((x,i) => {
              return (<Picker.Item label={x.title} value={x.title} key={i}/>)  
            })}
          </Picker>
      </View>
      }
      { (props.inputType === InputType.TextField) &&
        
        <>
          <TextInput
            style={styles.inputContainer}
            value={props.task}
            onChangeText={(t)=>props.onChangeTaskSchedule(t, props.time)}
            placeholderTextColor={WHITE}
            onFocus={() => props.changeSetEdit()}
          />
        </>
      }
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    pickerItem:{
      fontSize:30
    },
    inputLabel:{
        paddingTop:20
    },
    pickerContainer:{
      flex:1,
      borderStyle:'solid',
        borderBottomWidth: 3,
        borderColor:'#3E4E5E',
        marginHorizontal:10
    },
    inputContainer:{
      borderStyle:'solid',
      borderBottomWidth: 3,
      borderColor:'#3E4E5E',
      textAlignVertical:'bottom',
      color:WHITE,
      fontSize:17,
      marginHorizontal:10,
      flex: 1,
      flexWrap:'wrap',
      paddingBottom:15,
      paddingLeft:7,
      marginTop:10
    },
    picker:{
        marginBottom: -5,
        color:WHITE,
        fontSize:20,    
    }
})