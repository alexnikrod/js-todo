const form = document.getElementsByClassName('form')[0];
const formInput = document.querySelector('.form__input');

let todoItem = document.querySelector('.todo-list__item');
const tasks = document.querySelectorAll('.item__task');

const editBtn = document.querySelectorAll('.task--edit');
const delBtn = document.querySelectorAll('.task--delete');

const input = document.createElement('input');


// Add New Task
form.addEventListener('submit', (event) => {
    event.preventDefault();
    createItem(formInput.value);
    formInput.value = '';
});

// Done and undone
const addEventListener = () => {
    tasks.forEach(task => {
        task.addEventListener('click', () => {
            event.target.parentElement.classList.toggle('is-done');
        });
    });
};
addEventListener();

// Edit Task
const editTask = () => {
    editBtn.forEach(task => {
        task.addEventListener('click', () => {
            createEditInput();
        });
    });
};
editTask();

// Delete Task
const delTask = () => {
    delBtn.forEach(task => {
        task.addEventListener('click', () => {
            event.target.parentElement.remove();
        });
    });
};
delTask();

// Create Edit Input
const createEditInput = () => {
    // Create input fot edit
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'input--edit');
    input.setAttribute('required', '');
    input.setAttribute('autofocus', '');
    input.setAttribute('maxlength', '200');

    let target = event.target.parentElement;
    let textValue = event.target.previousElementSibling;

    input.value = textValue.innerHTML;
    target.insertBefore(input, target.childNodes[0]);
    input.focus();

    // Hide ot show original task
    const hideShowTask = () => {
        for (let i = 0; i < target.children.length; i++) {
            target.children[i].classList.toggle('is-hidden');
            if (target.children[i].classList.contains('task--check')) {
                target.children[i].remove();
            }
        }
    };
    hideShowTask();

    // button save
    target.insertAdjacentHTML('beforeend', `
        <span class="icon task--check" title="Save"></span>`);
    // Save edited task
    let saveBtn = document.querySelector('.task--check');

    const save = () => {
        saveBtn.addEventListener('click', () => {
            textValue.innerHTML = input.value;
            input.remove();
            hideShowTask();
            onOutsideClick();
        });
    };
    save();

    // Enter key in input
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            textValue.innerHTML = input.value;
            input.remove();
            hideShowTask();
            onOutsideClick();
        }
    });

    // On outside click
    const onOutsideClick = () => {
        const hideOverlay = () => {
            if (!event.target.closest('.todo-list__item')) {
                hideShowTask();
                input.remove();
                removeClickListener();
                console.log(event.target);
            }
        };

        const removeClickListener = () => {
            this.removeEventListener('click', hideOverlay);
            console.log(this);
        };

        this.addEventListener('click', hideOverlay);
        console.log(this);

    };
    onOutsideClick();
};

const createItem = () => {
    console.log(formInput.value);
    //let todo = document.qu
    todoItem.insertAdjacentHTML('beforebegin', `
    <div class="todo-list__item">
                <div class="item__task ">${formInput.value}</div>
                <span class="icon task--edit" title="Edit"></span>
                <span class="icon task--delete" title="Delete"></span>`);
};
