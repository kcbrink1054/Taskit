import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { NEONCOLOR } from './constants';
import AddButton from './AddButton';

export default function Footer() {
  return (
    <View style={styles.container}>
        {/* <AddButton/> */}
        {/* <Ionicons name="menu-outline" size={35} color={NEONCOLOR} style={styles.hideicon}></Ionicons> */}
        <Ionicons name="add-circle-outline" size={120} color={NEONCOLOR} style={styles.icon}></Ionicons>
        {/* <Ionicons name="menu-outline" size={35} color={NEONCOLOR}></Ionicons> */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#rgba(0,0,0,0)',
        height:200,
        width:Dimensions.get('window').width,
        // flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        paddingHorizontal:20
    },
    hideicon:{
        opacity:0
    }
})