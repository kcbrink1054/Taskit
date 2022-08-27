import AsyncStorage from '@react-native-async-storage/async-storage';

const TASK_KEY = "Task"
const data = [
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
// export const GetTaskListAsync = async () => {

// }