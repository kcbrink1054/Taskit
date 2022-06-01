import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ArialBoldText, ArialText } from './Text';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NEONCOLOR } from './constants';
import Input from './Input';
import Button from './Button';
import { SaveTask } from './DataStorage';


export default function AddNewTask(props) {
    const [title, setTitle] = useState("")

    const saveNewTask = async (data) => {
        await SaveTask(title)
    }
  return (
    <View style={styles.container}>
        <View style={{height:60}}></View>
        <TouchableOpacity onPress={() => props.showAddTask(false)}>
            <View>
                <AntDesign name="close" size={30} color={NEONCOLOR} style={styles.alignright}></AntDesign>
            </View>
        </TouchableOpacity>
      <ArialBoldText style={styles.text}>New Task</ArialBoldText>
      <Input name="TITLE" setValue={setTitle} value={title}/>
      <View style={{height:80}}></View>
      <Button press={()=>saveNewTask(title)} name="SAVE"/>
      {/* <Input name="START DATE"/> */}
      {/* <Input name="START DATE"/> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:35
        // justifyContent:'center',
        // alignItems:'center'
    },
    alignright:{
        textAlign:'right',
        paddingVertical:20
    },
    text:{
        fontSize: 32
    }
})