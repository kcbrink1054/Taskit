import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Notifications from 'expo-notifications'

export default class NotificationsHandler {

  static async TestNotification(){
    await Notifications.cancelAllScheduledNotificationsAsync()
    console.log("done")
    // Notifications.scheduleNotificationAsync({
    //     content: {
    //         title: "Time's up!",
    //         body: 'Change sides!',
    //       },
    //       trigger: {
    //         seconds: 3,
    //       },
    // })
  }
  // static TestNotification(){
  //   Notifications.scheduleNotificationAsync(
  //     {
  //       content:{
  //         title: 'Testing 123',
  //         body:"This is a test"
  //       },
  //       trigger: {
  //         seconds:4
  //     }
      
  //     }
  //   )
  // }

  static async ScheduleNotifications(taskSchedule){
    await Notifications.cancelAllScheduledNotificationsAsync()
    taskSchedule.forEach(x => {
      if (x.task !== null && x.task !== '') {
        Notifications.scheduleNotificationAsync({
          content: {
              title: "New Task To Complete",
              body: x.task,
            },
            trigger: {
              hour: x.notificationTime.hours,
              minute: x.notificationTime.minutes,
              repeats: true
            },
      })    
      }
    });
    
  }
}

const styles = StyleSheet.create({})