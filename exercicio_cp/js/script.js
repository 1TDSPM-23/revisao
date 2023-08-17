
let tarefaDone= []

const btnAddTarefa = document.querySelector("#btnAddTarefa");
const taskList = document.querySelector('#taskList');
const addTaskForm = document.querySelector('#addTaskForm');
  
    addTaskForm.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const Descricao = document.querySelector('#descricao').value;
        tarefaDone.push(Descricao.value)
  
        const Autor = document.querySelector('#autor').value;
        tarefaDone.push(Autor.value)
  
        const Departamento = document.querySelector('#departamento').value;
        tarefaDone.push(Departamento.value)
  
        const Importancia = document.querySelector('#importancia').value;
        tarefaDone.push(Importancia.value)
   
        const newTask = {
          descricao: Descricao,
          autor: Autor,
          departamento: Departamento,
          importancia: Importancia
      };
  
      taskList(newTask);
        addTaskForm.reset();
    });
  
    function taskList(tarefa) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${tarefa.Descricao}</td>
            <td>${tarefa.Autor}</td>
            <td>${tarefa.Departamento}</td>
            <td>${tarefa.Importancia}</td>
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
    };