import { StyleSheet, Text, View, ScrollView, Keyboard, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { BACKGROUNDCOLOR, NEONCOLOR, WHITE } from './constants';
import SingleSchedule from './SingleSchedule';
import { GetDefaultTaskSchedule, GetTaskSchedule, SaveTaskSchedule, GetTaskList, DeleteTaskSchedule } from './DataStorage';
import { Feather } from '@expo/vector-icons';
import Button from './Button';
import NotificationsHandler from './NotificationsHandler';
import moment from 'moment'
import { InputType } from './InputType';
import { useFocusEffect } from '@react-navigation/native';

export default function TaskSchedule() {
    const [taskSchedule, setTaskSchedule] = useState([])
    const [taskList, setTaskList] = useState([])
    const [edit, setEdit] = useState(false)
    useFocusEffect(
        React.useCallback(() => {
            // (async () => {
            //     await DeleteTaskSchedule()
            // })()
            (async () => {
                await GetTaskSchedule((t)=> 
                {
                    setTaskSchedule(t)
                })
                let t = await GetTaskList()
                setTaskList(t === null ? [] : t.filter(x => x.isCompleted == false ).sort((x, y) => y.taskId - x.taskId))

            })()
        }, [])
      );
    
    const CancelEditTask = async () => {
        await GetTaskSchedule(t => {
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
    const OnChangeInputType = (inputType, time) => {
        setTaskSchedule([...taskSchedule].map(x => {
            if (x.time === time) {
                return {
                    ...x,
                    inputType: inputType,
                    task: ""
                }
            } else {
                return x
            }
        }))
    }
    const changeSetEdit = () => {
        if (!edit) {
            setEdit(true)
        }
    }
    const InsertTaskScheduleRow = (data, index) => {
        let x = [...taskSchedule]
        x.splice(index+1,0,{
            time: moment().utcOffset(0).set({hour: data.hours, minute:data.minutes, second:0, millisecond:0}).format("h:mm A"),
            task: "",
            notificationTime:{
                hours:data.hours,
                minutes:data.minutes,
                seconds: 0
            },
            inputType: InputType.Dropdown
        })
        setTaskSchedule(x)
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
                    {taskSchedule &&
                        taskSchedule.map((x,i) => {
                            return <SingleSchedule 
                            index={i}
                            key={i}
                            time={x.time} 
                            task={x.task}
                            edit={edit} 
                            currentTimeSlot={x.notificationTime} 
                            nextTimeSlot={i < taskSchedule.length - 1? taskSchedule[i+1].notificationTime : null} 
                            onChangeTaskSchedule={OnChangeTaskSchedule}
                            changeSetEdit={()=> changeSetEdit()}
                            insertTaskScheduleRow={InsertTaskScheduleRow}
                            data={taskList}
                            inputType={x.inputType}
                            onChangeInputType={OnChangeInputType}
                            />

                            
                        })
                    }
                </ScrollView>
                <View>
                    <Button
                        onPress={()=> NotificationsHandler.TestNotification()}
                        title="Send Notification"
                    />
                </View>
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
