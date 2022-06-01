import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { NEONCOLOR } from './constants';
import AddButton from './AddButton';

export default function Footer(props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => props.showAddTask(true)}>
            <AntDesign name="pluscircleo" size={90} color={NEONCOLOR} style={styles.icon}></AntDesign>
        </TouchableOpacity>
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
        // paddingHorizontal:20
    },
    hideicon:{
        opacity:0
    }
})