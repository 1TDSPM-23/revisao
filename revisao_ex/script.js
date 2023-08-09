const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const tasks = [];

taskForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
  }
});

function addTask(taskText) {
  tasks.push(taskText);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement('li');
    li.textContent = tasks[i];

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.addEventListener('click', function () {
      deleteTask(i);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}
