document.addEventListener('DOMContentLoaded', function() {
    tasksList = [];
    const taskList = document.querySelector('#taskList');
    const addTaskForm = document.querySelector('#addTaskForm');
  
  addTaskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const descricao = document.querySelector('#descricao').value;
      const autor = document.querySelector('#autor').value;
      const departamento = document.querySelector('#departamento').value;
      const importancia = document.querySelector('#importancia').value;
      


      const newTask = {
          descricao: descricao,
          autor: autor,
          departamento: departamento,
          importancia: importancia
      };
      
      tasksList.push(newTask);

      adicionarTarefa(newTask);
      addTaskForm.reset();
  });
  
  function adicionarTarefa(tarefa) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
          <td>${tarefa.descricao}</td>
          <td>${tarefa.autor}</td>
          <td>${tarefa.departamento}</td>
          <td>${tarefa.importancia}</td>
          <td><button class="removeBtn">Remover</button></td>
      `;
      
      taskList.appendChild(newRow);
      
      const removeBtn = newRow.querySelector('.removeBtn');
      removeBtn.addEventListener('click', function() {
          newRow.remove();
      });
  }
});
