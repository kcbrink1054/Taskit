import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TaskDropdown(props) {
    const [isExpanded, setIsExpanded] = useState(props.defaultIsExpanded)
    const toggle = () => {
        setIsExpanded(!isExpanded)
    }
    return (
        <View>
            <TouchableOpacity onPress={()=> toggle()} activeOpacity={1} >
                <View style={styles.taskheader}>
                    <Text style={styles.headerfont}>{props.label}</Text>
                    <Ionicons name={isExpanded ? "chevron-down-outline" : "chevron-forward-outline"}  size={32} color="black" style={styles.icon}/>
                </View>
            </TouchableOpacity>

        </View>
  )
}

const styles = StyleSheet.create({
    taskheader:{
        flex:1,
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center'
    },
    headerfont:{
        fontSize:42
    },
    icon:{
        // padding:10
    }
    
})