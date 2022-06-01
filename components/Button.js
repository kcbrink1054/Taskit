import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NEONCOLOR, WHITE } from './constants'
import { ArialBoldText } from './Text'

export default function Button(props) {
  return (
    <TouchableOpacity onPress={()=>props.press()}>
      <View style={styles.buttoncontainer}>
        <ArialBoldText style={styles.text}>{props.name}</ArialBoldText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttoncontainer:{
        // backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:11,
        borderColor:NEONCOLOR,
        borderWidth:2,
        borderRadius:30
        
    },
    text:{
        color:NEONCOLOR,
    }
})