const data = [
    {
        title:"Take luna to the vet",
        priority:"high",
        startdate:"Sept 24",
        enddate:"Sept 24",
        TaskId:1,
        isCompleted:true
    },
    {
        title:"Clean Dishes",
        priority:"high",
        startdate:"Sept 24",
        enddate:"Sept 24",
        TaskId:2,
        isCompleted:false
    },
    {
        title:"Go to starbucks",
        priority:"high",
        startdate:"Sept 24",
        enddate:"Sept 24",
        TaskId:3,
        isCompleted:false
    },
    
]

export const GetCompletedTaskList = () => {
    return data.map(x => x.isCompleted === true)
}

export const GetTaskList = () => {
    return data.map(x => x.isCompleted === false)
}

export const GetTodaysTasks = () => {
    alert(JSON.parse(data.filter(x => x.isCompleted === false)))
    return null
}

// export const GetTaskListAsync = async () => {

// }