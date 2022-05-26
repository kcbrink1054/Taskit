import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        height:100,
        // backgroundColor:'rgba(0,0,0,.2)'
    }
})