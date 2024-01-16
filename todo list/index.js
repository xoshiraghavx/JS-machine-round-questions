const form = document.querySelector('#form');
const input = document.querySelector('#task_input');
const list = document.querySelector('#tasks');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const task = input.value;
    if(!task){
        return;
    }

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    list.appendChild(taskDiv);

    const taskInput = document.createElement('input');
    taskInput.classList.add('text');
    taskInput.type = 'text';
    taskInput.value = task;
    taskInput.setAttribute('readonly','readonly');
    taskDiv.appendChild(taskInput);

    const taskAction = document.createElement('div');
    taskAction.classList.add('action');
    taskDiv.appendChild(taskAction);

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerHTML = 'edit';

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete');
    completeButton.innerHTML = 'complete';

    const deleteButton= document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = 'delete';

    taskAction.appendChild(editButton);
    taskAction.appendChild(completeButton);
    taskAction.appendChild(deleteButton);

    editButton.addEventListener('click', ()=>{
        if(editButton.innerText == 'edit'){
            taskInput.removeAttribute('readonly');
            taskInput.focus();
            editButton.innerHTML = 'save';
        }
        else{
            taskInput.setAttribute('readonly', ' readonly');
            editButton.innerHTML = 'edit';
        }
    })
    completeButton.addEventListener('click', ()=>{
        taskInput.style.textDecoration = 'line-through';
    })
    deleteButton.addEventListener('click', ()=>{
        list.removeChild(taskDiv);
    })
    
    input.value = '';

})
    
    
   