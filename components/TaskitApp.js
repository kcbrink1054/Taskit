import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import Header from './Header'
import TaskDropdown from './TaskDropdown'
import { Container } from "native-base";
import Footer from './Footer';
import { GetTaskList, GetCompletedTaskList, SaveDefaultTasks, UpdateTask } from './DataStorage';
import AddNewTask from './AddNewTask';
import Button from './Button';
import * as Notifications from "expo-notifications";
import NotificationsHandler from './NotificationsHandler';

export default function TaskitApp() {
    const [taskList, setTaskList] = useState([])
    const [showAddTask, setShowAddTask] = useState(false)
    
    useEffect(() => {
        (async () => {
            let t = await GetTaskList()
            setTaskList(t === null ? [] : t)
        })()
    },[])

    const GetTodaysTasks = () => {
        return taskList.filter(x => x.isCompleted == false && new Date(x.startdate) <= new Date())
    }
    const GetMyTasks = () => {
        return taskList.filter(x => x.isCompleted == false && new Date(x.startdate) > new Date())
    }
    const GetCompletedTasks = () => {
        return taskList.filter(x => x.isCompleted == true).slice(0,5)
    }
    const SaveCheck = async (taskId) => {
        UpdateTask(taskId, setTaskList)
    }

    const sendNotification = () => {
        NotificationsHandler.SendNotifications()
    }
  return (
    <>
    { !showAddTask &&
        <View style={styles.container}>
        <View style={{height:60}}></View>
        <ScrollView>
            <TaskDropdown
                label="Today's Task"
                defaultIsExpanded={true}
                tasks={GetTodaysTasks()}
                saveCheck={SaveCheck}
            />
            <TaskDropdown
                label="My Task"
                defaultIsExpanded={false}
                tasks={GetMyTasks()}
                saveCheck={SaveCheck}
            />
            <TaskDropdown
                label="Completed Task"
                defaultIsExpanded={false}
                tasks={GetCompletedTasks()}
                saveCheck={SaveCheck}
            />
        </ScrollView>
        <Button 
            press={()=>sendNotification()}
            name="Send Notification"
        />
        <Footer showAddTask={setShowAddTask}/>
    </View>
    }
    { showAddTask &&
        <AddNewTask showAddTask={setShowAddTask} setTaskList={setTaskList}/>
    }
        
    </>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})