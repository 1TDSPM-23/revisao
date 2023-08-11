document.addEventListener("DOMContentLoaded", function () {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  const tasks = [];

  addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value;
      if (taskText.trim() !== "") {
          tasks.push({ text: taskText, editing: false });
          updateTaskList();
          taskInput.value = "";
      }
  });

  taskList.addEventListener("click", function (event) {
      const taskItem = event.target.closest("li");
      if (taskItem) {
          const taskIndex = Array.from(taskList.children).indexOf(taskItem);
          if (taskIndex !== -1) {
              const task = tasks[taskIndex];
              if (event.target.classList.contains("edit-button")) {
                  task.editing = !task.editing;
                  updateTaskList(); // Atualize a lista após a edição ser ativada/desativada
              } else if (event.target.classList.contains("delete-button")) {
                  tasks.splice(taskIndex, 1);
                  updateTaskList(); // Atualize a lista após a exclusão
              } else if (event.target.classList.contains("save-button")) {
                  const input = taskItem.querySelector("input");
                  task.text = input.value;
                  task.editing = false;
                  updateTaskList(); // Atualize a lista após salvar a edição
              }
          }
      }
  });

  function updateTaskList() {
      taskList.innerHTML = "";
      for (let i = 0; i < tasks.length; i++) {
          const task = tasks[i];
          const taskItem = document.createElement("li");
          if (task.editing) {
              taskItem.innerHTML = `
                  <input type="text" value="${task.text}" data-index="${i}">
                  <button class="save-button">Salvar</button>
              `;
          } else {
              taskItem.innerHTML = `
                  <span>${task.text}</span>
                  <button class="edit-button">Editar</button>
                  <button class="delete-button">Excluir</button>
              `;
          }
          taskList.appendChild(taskItem);
      }
  }
});
