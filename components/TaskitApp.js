import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import TaskDropdown from './TaskDropdown'
import { Container } from "native-base";
import Footer from './Footer';
import { GetTaskList, GetCompletedTaskList, SaveDefaultTasks } from './DataStorage';
export default function TaskitApp() {
    const [todaysTasks, setTodaysTasks] = useState([])
    const [myTasks, setMyTasks] = useState([])
    const [completedTasks, setCompletedTasks] = useState([])
    useEffect(() => {
        (async () => {
            await GetTaskList(setTodaysTasks)
        }) ()
    })


  return (
    <View style={styles.container}>
        {/* <Container> */}
        {/* <Header/> */}
        <ScrollView>
            <TaskDropdown
                label="Today's Task"
                defaultIsExpanded={true}
                tasks={todaysTasks}
                getTasks={null}
            />
            <TaskDropdown
                label="My Task"
                defaultIsExpanded={true}
                tasks={null}
                getTasks={null}
            />
            <TaskDropdown
                label="Completed Task"
                defaultIsExpanded={false}
                tasks={null}
                getTasks={GetCompletedTaskList}
            />
        </ScrollView>
        <Footer/>
        {/* </Container> */}
        
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})