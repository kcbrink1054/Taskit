import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox } from 'native-base';
import { NEONCOLOR, WHITE } from "./constants";
import { ArialBoldText, ArialText } from './Text';

export default function TaskDropdown(props) {
    const [isExpanded, setIsExpanded] = useState(props.defaultIsExpanded)    

    const toggle = () => {
        setIsExpanded(!isExpanded)
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> toggle()} activeOpacity={1}>
                <View style={isExpanded ? styles.taskheaderexpanded : styles.taskheader}>
                    <ArialBoldText style={styles.headertext}>{props.label}</ArialBoldText>
                    <Ionicons name={isExpanded ? "chevron-down-outline" : "chevron-forward-outline"} size={20} color={WHITE} style={styles.icon}/>
                </View>
            </TouchableOpacity>
            
            <View style={styles.taskcontainer}>
                {props.tasks && isExpanded &&
                    props.tasks.map((task)=> {
                        return(
                            <Checkbox onPress={()=> props.saveCheck(task.taskId)} value="checkbox" key={task.taskId} isChecked={task.isCompleted} colorScheme='blue' style={styles.checkboxcontainer}>
                                <ArialText style={task.isCompleted ? styles.checkboxtextlinethrough : styles.checkboxtext}>{task.title}</ArialText>
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
        fontSize:18,
        paddingLeft:15
    },
    checkboxtextlinethrough:{
        fontSize:18,
        paddingLeft:15,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    checkboxcontainer:{
        marginVertical:10,
        marginLeft:55,
        borderColor:NEONCOLOR,
        backgroundColor:'rgba(0,0,0,0)',
        
    },
    taskcontainer:{
        // minHeight:100
    },
    container:{
        paddingLeft:25
    },
    taskheader:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:20,
        paddingTop:20,
        borderBottomColor:'#3E4E5E',
        borderBottomWidth: 1.5

    },
    taskheaderexpanded:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingBottom:20,
        paddingTop:20,
        

    },
    headertext:{
        fontSize:26
    },
    icon:{
        paddingLeft:8
    }
    
})  