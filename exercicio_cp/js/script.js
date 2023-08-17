
let tarefaDone= []

document.addEventListener('DOMContentLoaded', function() {
    const btnAddTarefa = document.querySelector("#btnAddTarefa");
    const taskList = document.querySelector('#taskList');
    const addTaskForm = document.querySelector('#addTaskForm');
  
    addTaskForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const descricao = document.querySelector('#descricao').value;
        tarefaDone.push(descricao.value)
  
        const autor = document.querySelector('#autor').value;
        tarefaDone.push(autor.value)
  
        const departamento = document.querySelector('#departamento').value;
        tarefaDone.push(departamento.value)
  
        const importancia = document.querySelector('#importancia').value;
        tarefaDone.push(importancia.value)
   
        const newTask = {
          descricao: descricao,
          autor: autor,
          departamento: departamento,
          importancia: importancia
      };
  
      taskList(newTask);
        addTaskForm.reset();
    });
  
    function taskList(tarefa) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${tarefa.descricao}</td>
            <td>${tarefa.autor}</td>
            <td>${tarefa.departamento}</td>
            <td>${tarefa.importancia}</td>
            <td><button class="removeBtn">Remover</button></td>
        `;
  taskList.appendChild(newRow);
  
        removeBtn.textContent = " DELETE ";
  
        li.appendChild(removeBtn);
  
        const removeBtn = newRow.querySelector('.removeBtn');
        removeBtn.addEventListener("click", (evt)=>{
          let conteudoDoLi = evt.target.parentNode.textContent.split(" ");
          let indice = taskList.indexOf(conteudoDoLi[0])
          taskList.splice(indice,1);
          evt.target.parentNode.remove();
          console.log(taskList);
      });
  
  }});