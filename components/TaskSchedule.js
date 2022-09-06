import { StyleSheet, Text, View, ScrollView, Keyboard, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { BACKGROUNDCOLOR, NEONCOLOR, WHITE } from './constants';
import SingleSchedule from './SingleSchedule';
import { GetDefaultTaskSchedule, GetTaskSchedule, SaveTaskSchedule } from './DataStorage';
import { Feather } from '@expo/vector-icons';
import Button from './Button';
import NotificationsHandler from './NotificationsHandler';

export default function TaskSchedule() {
    const [taskSchedule, setTaskSchedule] = useState([])
    const [edit, setEdit] = useState(false)
    useEffect(()=> {
        (async () => {
            let t = await GetTaskSchedule()
            setTaskSchedule(t)
        })()
    }, [])
    const CancelEditTask = async () => {
        await GetTaskSchedule().then(t => {
            Keyboard.dismiss()
            setEdit(false)    
            setTaskSchedule(t)
        })
        
    }
    const ResetEditTask = async () => {
        setTaskSchedule(GetDefaultTaskSchedule())
        
    }    
    const SaveEditTask = async () => {
        await SaveTaskSchedule(taskSchedule,() => {
            Keyboard.dismiss()
            setEdit(false)
            NotificationsHandler.ScheduleNotifications(taskSchedule)
            ToastAndroid.show("Save Successful!",ToastAndroid.SHORT)
        })
    }
    const OnChangeTaskSchedule = (text, time) => {
        setTaskSchedule([...taskSchedule].map(x => {
            if (x.time === time) {
                return {
                    ...x,
                    task: text
                }
            } else {
                return x
            }
        }))
    }
    const changeSetEdit = () => {
        console.log(edit)
        if (!edit) {
            setEdit(true)
        }
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.floatRight}>
                    { !edit &&
                        <Feather style={styles.icon} name="edit" size={28} color={WHITE} onPress={()=>setEdit(!edit)} />
                    }
                    { edit &&
                        <Feather style={styles.icon} name="x" size={28} color={WHITE} onPress={()=>CancelEditTask()} />
                    }
                    
                </View>
                <ScrollView>
                    {
                        taskSchedule.map((x,i) => {
                            return <SingleSchedule key={i} time={x.time} task={x.task} edit={edit} onChangeTaskSchedule={OnChangeTaskSchedule} changeSetEdit={()=> changeSetEdit()}/>}
                        )
                    }
                </ScrollView>
                { edit &&
                    <View style={styles.buttoncontainer}>
                        <Button
                            onPress={CancelEditTask}
                            title='Cancel'
                        />
                        <Button
                            onPress={ResetEditTask}
                            title='Reset'
                        />
                        <Button
                            onPress={SaveEditTask}
                            title='Save'
                        />
                    </View>
                }
                
            </View>
        </>
      )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, backgroundColor:BACKGROUNDCOLOR,
        paddingTop:50
    },
    floatRight:{
        alignItems:'flex-end',
        paddingBottom:10,
        // borderBottomWidth:1,
        // borderBottomColor:'grey'
    },
    icon:{
        padding:10,
        marginRight:20,
        // backgroundColor:'white'
    },
    buttoncontainer:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        height:90,
        borderTopWidth:1,
        borderTopColor:'grey'  
    },
})
