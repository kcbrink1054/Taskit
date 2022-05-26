import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NEONCOLOR } from './constants'

export default function AddButton() {
  return (
    <View style={styles.buttoncontainer}>
      <Text style={styles.buttonstyle}>+</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    buttoncontainer:{
        // borderColor:NEONCOLOR,
        // borderWidth:2
    },
    buttonstyle:{
        color:NEONCOLOR,
        fontSize:80,
        borderColor:NEONCOLOR,
        borderWidth:2,
        borderRadius:200,
        // paddingHorizontal:40

    }
})