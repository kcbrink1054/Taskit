import AsyncStorage from '@react-native-async-storage/async-storage';

const TASK_KEY = "Task"
const data = [
    {
        title:"Take luna to the vet",
        priority:"high",
        startdate:"Sept 24",
        TaskId:1,
        isCompleted:true
    },
    {
        title:"Clean Dishes",
        priority:"high",
        startdate:"Sept 24",
        TaskId:2,
        isCompleted:false
    },
    {
        title:"Go to starbucks",
        priority:"high",
        startdate:"Sept 24",
        TaskId:3,
        isCompleted:false
    },
    
]

export const GetCompletedTaskList = async (callback) => {
    await AsyncStorage.getItem(TASK_KEY).then(x => {
        let result = JSON.parse(x)
        let t = result.filter(x => x.isCompleted === true)
        callback(t)
    })
}

export const GetTaskList = async (callback) => {
    await AsyncStorage.getItem(TASK_KEY).then(x => {
        let result = JSON.parse(x)
        let t = result.filter(x => x.isCompleted === false)
        callback(t)
    })
}


// export const SaveDefaultTasks = async () => {
    
//     await AsyncStorage.setItem(TASK_KEY, JSON.stringify(data)).then(x => {
//         alert("success")
//         return
//     })
// }
// export const GetTaskListAsync = async () => {

// }