import { StyleSheet, Text, View, ScrollView, Keyboard, ToastAndroid } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { BACKGROUNDCOLOR, BACKGROUNDCOLORHEADER, NEONCOLOR, WHITE } from './constants';
import SingleSchedule from './SingleSchedule';
import { GetDefaultTaskSchedule, GetTaskSchedule, SaveTaskSchedule, GetTaskList, DeleteTaskSchedule } from './DataStorage';
import { Feather } from '@expo/vector-icons';
import Button from './Button';
import NotificationsHandler from './NotificationsHandler';
import moment from 'moment'
import { InputType } from './InputType';
import { useFocusEffect } from '@react-navigation/native';
import { ArialBoldText } from './Text';

export default function TaskSchedule() {
    const [taskSchedule, setTaskSchedule] = useState([])
    const [taskList, setTaskList] = useState([])
    const [edit, setEdit] = useState(true)
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
                <View style={styles.headerContainer}>
                    <View style={styles.headerLeft}>
                        { edit &&
                            <ArialBoldText style={styles.editText}>Edit</ArialBoldText>
                        }
                        
                    </View>
                    <View style={styles.headerRight}>
                    { !edit &&
                            <Feather style={styles.icon} name="edit" size={28} color={WHITE} onPress={()=>setEdit(!edit)} />
                        }
                        { edit &&
                            <>
                                <Feather style={styles.icon} name="save" size={26} color={WHITE} onPress={()=>SaveEditTask()} />   
                                <Feather style={styles.icon} name="refresh-cw" size={26} color={WHITE} onPress={()=>ResetEditTask()} />
                                <Feather style={styles.icon} name="x" size={28} color={WHITE} onPress={()=>CancelEditTask()} />
                                
                            </>
                        }
                    </View>
                </View>
                <ScrollView view={styles.scrollContainer}>
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
                {/* <View>
                    <Button
                        onPress={()=> NotificationsHandler.TestNotification()}
                        title="Send Notification"
                    />
                </View> */}
                {/* { edit &&
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
                } */}
                
            </View>
        </>
      )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:BACKGROUNDCOLOR,
        // flexDirection: 'row'
    },
    scrollContainer:{
    },
    headerContainer:{
        backgroundColor:'RED',
        flex: 1,
        paddingTop:50,
        paddingBottom:10,
        flexDirection:'row',
        height: 30
        // height:'100%'
    },
    headerLeft:{
        flex:1,
    },
    headerRight:{
        flex:1,
        flexDirection:'row',
        // alignItems:'center',
        justifyContent: 'flex-end',
        // backgroundColor:'red'
    },
    floatRight:{
        // flexDirection:'row-reverse',
        alignItems:'flex-end',
        paddingBottom:10,
      
        // borderBottomWidth:1,
        // borderBottomColor:'grey'
    },
    floatLeft:{
        flexDirection:'row',
        // alignItems:'flex-end',
      
        // borderBottomWidth:1,
        // borderBottomColor:'grey'
    },
    editText:{
        padding:10,
        fontSize:25,
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
    },
    iconContainer:{
        flex:1,
        flexDirection:'row'
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
