import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import TaskDropdown from './TaskDropdown'
import Footer from './Footer';
import { GetTaskList, UpdateTask, SaveTask } from './DataStorage';
import NotificationsHandler from './NotificationsHandler';
import { BACKGROUNDCOLOR } from './constants';
import Dialog from 'react-native-dialog';

export default function TaskitApp() {
    const [taskList, setTaskList] = useState([])
    const [showAddDialog, setShowAddDialog] = useState(false)
    useEffect(() => {
        
        (async () => {
            let t = await GetTaskList()
            setTaskList(t === null ? [] : t)
        })()
    },[])

    const GetPriorityTasks = () => {
        return taskList.filter(x => x.isCompleted == false && x.isPriority === true)
    }
    const GetMyTasks = () => {
        return taskList.filter(x => x.isCompleted == false ).sort((x, y) => y.taskId - x.taskId)
    }
    const GetCompletedTasks = () => {
        return taskList.filter(x => x.isCompleted == true).sort((x, y) => y.taskId - x.taskId).slice(0,5)
    }
    const SaveCheck = async (taskId) => {
        UpdateTask(taskId, setTaskList)
    }

    const sendNotification = () => {
        NotificationsHandler.SendNotifications()
    }
    
  return (
    <>
        {
            showAddDialog &&
            <AddDialog showAddDialog={showAddDialog} setShowAddDialog={setShowAddDialog} setTaskList={setTaskList}/>
        }
        
            <View style={styles.container}>
            <View style={{height:60}}></View>
            <ScrollView>
            { GetPriorityTasks().length === 2 &&
                <TaskDropdown
                    label="Priority Tasks"
                    defaultIsExpanded={true}
                    tasks={GetTodaysTasks()}
                    saveCheck={SaveCheck}
                />
            }
                <TaskDropdown
                    label="My Tasks"
                    defaultIsExpanded={true}
                    tasks={GetMyTasks()}
                    saveCheck={SaveCheck}
                />
                <TaskDropdown
                    label="Completed Tasks"
                    defaultIsExpanded={false}
                    tasks={GetCompletedTasks()}
                    saveCheck={SaveCheck}
                />
            </ScrollView>
            <Footer showAddTask={()=> setShowAddDialog(true)}/>
        </View>        
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, backgroundColor:BACKGROUNDCOLOR
    }
})

function AddDialog(props){
    const [title, setTitle] = useState("")

    const saveNewTask = async () => {
        if (title === '') return;
        
        await SaveTask(title, (data) => {
            props.setTaskList(data)
            props.setShowAddDialog(false)
            
        })
    }
    return(
        <>
            <Dialog.Container visible={props.showAddDialog}>
                <Dialog.Title>New Task</Dialog.Title>
                <Dialog.Input placeholder='Enter new task' multiline={false} onChangeText={(t)=>setTitle(t)} value={title}/>
                <Dialog.Button label='Cancel' onPress={() => props.setShowAddDialog(!props.showAddDialog)}/>
                <Dialog.Button label='Add Another' onPress={() => props.setShowAddDialog(!props.showAddDialog)}/>
                <Dialog.Button label='Save' onPress={() => saveNewTask()}/>
            </Dialog.Container>
        </>
    )
}