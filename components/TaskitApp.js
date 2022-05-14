import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from './Header'
import TaskDropdown from './TaskDropdown'

export default function TaskitApp() {
    const [tasks, setTasks] = useState([{}])
  return (
    <View>
        <Header/>
        <ScrollView>
            <TaskDropdown
                label="Today's Task"
                defaultIsExpanded={true}
                tasks={[]}
            />
            <TaskDropdown
                label="My Task"
                defaultIsExpanded={true}
                tasks={[]}
            />
            <TaskDropdown
                label="Completed Task"
                defaultIsExpanded={false}
                tasks={[]}
            />
        </ScrollView>
        
    </View>
  )
}

const styles = StyleSheet.create({

})