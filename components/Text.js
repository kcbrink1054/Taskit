import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WHITE } from './constants'

export default function CustomText(props) {
  return ( <Text style={[props.style, {color:WHITE, fontFamily:'Arial'}]}>{props.children}</Text>)
}

const styles = StyleSheet.create({})