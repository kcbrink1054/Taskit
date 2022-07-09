import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Notifications from 'expo-notifications'
export default class NotificationsHandler {
  static ScheduleNotifications(){

  }
  static SendNotifications(){
    Notifications.scheduleNotificationAsync({
        content: {
            title: "Time's up!",
            body: 'Change sides!',
          },
          trigger: {
            seconds: 2,
          },
    })
  }
}

const styles = StyleSheet.create({})