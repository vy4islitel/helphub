const taskList = document.getElementById('taskList')
const addTaskButton = document.getElementById('addTaskBtn')

addTaskButton.onclick = function addTheCurrentTask() {
    let inputTaskText = document.getElementById('inptTaskText')
    console.log('Текст задачи: ', inputTaskText.value)

    let taskIsReadyToAdd = inputTaskText.value
    taskList.insertAdjacentHTML('afterend', `<p>${taskIsReadyToAdd}</p>`)
}