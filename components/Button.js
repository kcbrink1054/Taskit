import { StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native'
import React from 'react'
import { BACKGROUNDCOLOR, NEONCOLOR, WHITE } from './constants'
import { ArialBoldText } from './Text'

export default function Button(props) {
  return (
    <Pressable style={styles.button} onPress={() => props.onPress()}>
      <ArialBoldText style={styles.buttontext}>{props.title}</ArialBoldText>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: BACKGROUNDCOLOR,
    color:'white',
    borderRadius:6,
    borderColor:NEONCOLOR,
    borderWidth:2,
    marginHorizontal:10


}, buttontext: {
    color:NEONCOLOR
}
})