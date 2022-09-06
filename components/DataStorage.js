import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const TASK_KEY = "Task"
const TASK_SCHEDULE_KEY = "TASK_SCHEDULE_KEY"

const d = [
    {
        title:"Take luna to the vet",
        priority:"high",
        startdate:new Date(),
        taskId:1,
        isCompleted:true
    },
    {
        title:"Clean Dishes",
        priority:"high",
        startdate:new Date(),
        taskId:2,
        isCompleted:false
    },
    {
        title:"Go to starbucks",
        priority:"high",
        startdate:new Date(),
        taskId:3,
        isCompleted:false
    },
    {
        title:"Work on car",
        priority:"high",
        startdate:new Date(),
        taskId:4,
        isCompleted:true
    },
    {
        title:"Plan Future",
        priority:"high",
        startdate:"2022-05-31T19:38:47.919Z",
        taskId:5,
        isCompleted:false
    },
    {
        title:"Go play tennis",
        priority:"high",
        startdate:"2022-05-31T19:38:47.919Z",
        taskId:6,
        isCompleted:false
    },
    
]

export const GetTaskList = async () => {
    let result = await AsyncStorage.getItem(TASK_KEY)
    // console.log(result)
    return JSON.parse(result)
}
export const UpdateTask = async (taskId, callback) => {
    let response = await AsyncStorage.getItem(TASK_KEY)
    let result = JSON.parse(response)

    let taskList = result.map(x => {
        if (x.taskId === taskId) {
            x.isCompleted = !x.isCompleted
        }
        return x
    })
    await AsyncStorage.setItem(TASK_KEY, JSON.stringify(taskList)).then(x => {
        callback(taskList)
    })


}

export const SaveTask = async (title, callback) => {
    let response = await GetTaskList()
    
    if (response === null) {
        response = []
    }
    
    let data = {
        title:title,
        startdate:new Date(),
        taskId:response.length + 1,
        isCompleted:false
    }
    
    let c = response.concat(data)
    await AsyncStorage.setItem(TASK_KEY, JSON.stringify(c)).then(x => {
        // console.log(c)
        callback(c)
    }).catch(e => {
        alert("Error while trying to save async storage.")
    })
}

export const SaveDefaultTasks = async () => {
    
    await AsyncStorage.setItem(TASK_KEY, JSON.stringify(data)).then(x => {
        alert("success")
        return
    })
}


export const SaveTaskSchedule = async (data, callback) => {
    await AsyncStorage.setItem(TASK_SCHEDULE_KEY, JSON.stringify(data)).then(x => {
        callback()
    }).catch(e => {
        alert("Error while trying to save async storage.")
    })
}

export const GetTaskSchedule = async () => {
    let result = await AsyncStorage.getItem(TASK_SCHEDULE_KEY)
    if (result === null || result === []) {
        result = GetDefaultTaskSchedule()
    }
    // console.log(result)
    return JSON.parse(result)
}

export const GetDefaultTaskSchedule = () => {
    console.log("DefaultTaskSchedule")
    let l = []
    let x = moment().utcOffset(0).set({hour: 8, minute:0, second:0, millisecond:0})
    
    while (x.hour() <= 22) {
        l.push({
            time: x.format("h:mm A"),
            task: "",
            notificationTime:{
                hours:x.hour(),
                minutes:x.minute(),
                seconds: x.second()
            }
        })
        x.add(30,'minutes')
    }
    console.log(l)
    return l
}