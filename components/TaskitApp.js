import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import TaskDropdown from './TaskDropdown'
import { Container } from "native-base";
import Footer from './Footer';
import { GetTodaysTasks } from './DataStorage';
export default function TaskitApp() {
    const [todaysTasks, setTodaysTasks] = useState([])
    const [myTasks, setMyTasks] = useState([])
    useEffect( () => {
        setTodaysTasks(GetTodaysTasks())
    })


  return (
    <View style={styles.container}>
        {/* <Container> */}
        <Header/>
        <ScrollView>
            <TaskDropdown
                label="Today's Task"
                defaultIsExpanded={true}
                tasks={todaysTasks}
            />
            <TaskDropdown
                label="My Task"
                defaultIsExpanded={true}
                tasks={null}
            />
            <TaskDropdown
                label="Completed Task"
                defaultIsExpanded={false}
                tasks={null}
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