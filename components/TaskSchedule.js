import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import Header from './Header'
import TaskDropdown from './TaskDropdown'
import { Container } from "native-base";
import Footer from './Footer';
import { GetTaskList, GetCompletedTaskList, SaveDefaultTasks, UpdateTask } from './DataStorage';
import AddNewTask from './AddNewTask';
import Button from './Button';
import NotificationsHandler from './NotificationsHandler';
import { BACKGROUNDCOLOR } from './constants';
import SingleSchedule from './SingleSchedule';

export default function TaskSchedule() {
    return (
        <>
            <View style={styles.container}>
                <View style={{height:60}}></View>
                <ScrollView>
                    <SingleSchedule/>
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