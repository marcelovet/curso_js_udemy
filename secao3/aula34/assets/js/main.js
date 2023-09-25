const inputTask = document.querySelector('.input-task')
const btnTask = document.querySelector('.btn-add-task')
const tasks = document.querySelector('.tasks')

function clearInput () {
  inputTask.value = ''
  inputTask.focus()
}

function createDeleteBtn (li) {
  li.innerText += ' '
  const deleteBtn = document.createElement('button')
  // deleteBtn.classList.add('btn-delete')
  deleteBtn.setAttribute('class', 'btn-delete-container')
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash btn-delete"></i>'
  // deleteBtn.innerText = 'Apagar'
  li.appendChild(deleteBtn)
}

function createTask (text) {
  const li = document.createElement('li')
  li.innerText = text
  createDeleteBtn(li)
  tasks.appendChild(li)
  clearInput()
  saveTasks()
}

function saveTasks () {
  const liTasks = tasks.querySelectorAll('li')
  const taskList = []

  for (const task of liTasks) {
    taskList.push(task.innerText.trim())
  }

  const tasksJSON = JSON.stringify(taskList)
  window.localStorage.setItem('tarefas', tasksJSON)
}

function addTask () {
  inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode !== 13 || !inputTask.value) return
    createTask(inputTask.value)
  })

  btnTask.addEventListener('click', function (e) {
    if (!inputTask.value) return
    createTask(inputTask.value)
  })
}

function removeTask () {
  document.addEventListener('click', function (e) {
    const el = e.target

    if (el.classList.contains('btn-delete')) {
      const tgtTag = el.parentElement
      tgtTag.parentElement.remove()
    }

    if (el.classList.contains('btn-delete-container')) {
      const tgtTag = el.parentElement
      tgtTag.remove()
    }

    saveTasks()
  })
}

function getSavedTasks () {
  const savedTasks = window.localStorage.getItem('tarefas')
  const taskList = JSON.parse(savedTasks)

  for (const task of taskList) {
    createTask(task)
  }
}

addTask()
removeTask()
getSavedTasks()
