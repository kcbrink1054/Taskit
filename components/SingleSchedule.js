import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { ArialBoldText, ArialText } from './Text'
import { WHITE } from './constants'

export default function SingleSchedule(props) {
  const [task, setTask] = useState(props.task)
  return (
    <View style={styles.container}>
      <ArialText style={{fontSize:16,textAlignVertical: 'center', backgroundColor:'red'}}>{props.time}</ArialText>
      <TextInput
        style={styles.inputContainer}
        placeholder='Chill'
        value={task}
        onChangeText={(t)=>setTask(t)}
        editable={true}
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
        // backgroundColor:'green',
        borderStyle:'solid',
        borderBottomWidth: 2,
        borderColor:{WHITE},
        width:200,
        textAlignVertical:'bottom',
        color:WHITE,
        fontSize:20,
        paddingLeft:10
    }
})