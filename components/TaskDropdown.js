import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox } from 'native-base';
import { NEONCOLOR, WHITE } from "./constants";
import CustomText from './Text';


export default function TaskDropdown(props) {
    const [isExpanded, setIsExpanded] = useState(props.defaultIsExpanded)
    const toggle = () => {
        setIsExpanded(!isExpanded)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> toggle()} activeOpacity={1} >
                <View style={styles.taskheader}>
                    <CustomText style={styles.headerfont}>{props.label}</CustomText>
                    <Ionicons name={isExpanded ? "chevron-down-outline" : "chevron-forward-outline"} size={32} color={WHITE} style={styles.icon}/>
                </View>
            </TouchableOpacity>
            
            <View style={styles.taskcontainer}>
                {props.tasks && isExpanded &&
                    props.tasks.map((task)=> {
                        return(
                            <Checkbox onPress={()=> alert("test")} value="checkbox" key={task.TaskId} isChecked={task.isCompleted} colorScheme='blue' style={styles.checkboxcontainer}>
                                <CustomText style={styles.checkboxtext}>{task.title}</CustomText>
                            </Checkbox>
                        )
                    })
                    
                }
                
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    checkboxtext:{
        fontSize:18
    },
    checkboxcontainer:{
        // fontSize:50
        marginVertical:10,
        borderColor:NEONCOLOR,
        backgroundColor:'rgba(0,0,0,0)'
    },
    taskcontainer:{
        // minHeight:100
    },
    container:{
        paddingHorizontal:20
    },
    taskheader:{
        flex:1,
        flexDirection:'row',
        // justifyContent:'center',
        alignItems:'center',
        paddingBottom:20,
        paddingTop:10
    },
    headerfont:{
        fontSize:40
    },
    icon:{
        // padding:10
    }
    
})