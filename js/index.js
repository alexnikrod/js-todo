const task = document.querySelector('.container');
const checkmark = document.querySelector('.checkmark');
const editBtn = document.querySelector('.edit');
const delBtn = document.querySelector('.delete');
const list = document.querySelector('.todo-list');



let form = document.getElementsByClassName('form-todo')[0];

let formInput = document.querySelector('.input-todo');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    createItem(formInput.value);
    formInput.value = '';
});


task.addEventListener('click', () => {
    console.log('task');
    task.classList.toggle('completed');
    checkmark.classList.toggle('done');
    checkmark.classList.toggle('undone');
});

editBtn.addEventListener('click', () => {
    console.log('edit');
});

delBtn.addEventListener('click', () => {
    console.log('delete');
});

const createItem = (event) => {
    let label = document.createElement('label');
    label.innerHTML = event;
    label.className = 'container';
    list.appendChild(label);
};