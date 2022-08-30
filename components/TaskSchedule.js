import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { BACKGROUNDCOLOR } from './constants';
import SingleSchedule from './SingleSchedule';

export default function TaskSchedule() {
    const [taskSchedule, setTaskSchedule] = useState(initialState)

    return (
        <>
            <View style={styles.container}>
                <View style={{height:60}}></View>
                <ScrollView>
                    {
                        taskSchedule.map(x => (<SingleSchedule time={x.time} task={x.task}/>))
                    }
                    
                </ScrollView>
            </View>
        </>
      )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, backgroundColor:BACKGROUNDCOLOR
    }
})

const initialState = [
    {
        time:"8:00 AM",
        task: "Take Luna outside"
    },
    {
        time:"9:00 AM",
        task: "Go to the store"
    },
    {
        time:"10:00 AM",
        task: ""
    }
]