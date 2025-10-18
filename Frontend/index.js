let apiUrl = "https://api-deployment-c7.onrender.com/data"

// Add the tasks to the web site
let tasksContainer = document.getElementById('tasks-box')

function createListItem(item){
    // new li element
    let newLi = document.createElement('li')
    newLi.innerText = item
    return newLi
}

fetch(apiUrl)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
    let tasks = data
    let newTasks = tasks.map((task)=>{
        return createListItem(task.title)
    })

    tasksContainer.append(...newTasks)
})



