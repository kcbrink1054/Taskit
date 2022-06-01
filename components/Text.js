import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WHITE } from './constants'

export function ArialBoldText(props) {
  return ( <Text style={[{color:WHITE, fontFamily:'ArialBold'}, props.style]}>{props.children}</Text>)
}

export function ArialText(props) {
  return ( <Text style={[props.style, {color:WHITE, fontFamily:'Arial'}, props.style]}>{props.children}</Text>)
}

const styles = StyleSheet.create({})