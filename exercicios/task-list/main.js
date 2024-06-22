const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const mostra = document.querySelector('.mostra');

const criaLi = () => {
    const li = document.createElement('li');
    return li;
};

const addClass = (li) => {
    li.innerText += '  ';
    const btnDel = document.createElement('button')
    btnDel.innerText = "delete";
    btnDel.setAttribute('class', 'delete');
    btnDel.setAttribute('title', 'delete');
    li.appendChild(btnDel);
};

const clearInput = () => {
    input.value = '';
    input.focus();
};

const save = () => {
    let tasks = document.querySelectorAll('li');
    const tasksArray = [];

    for (let i of tasks) {
        let taskText = i.innerText;
        taskText = taskText.replace('delete', '').trim();
        tasksArray.push(taskText);
    };

    console.log(tasksArray);
    const taksJson = JSON.stringify(tasksArray);
    localStorage.setItem('tasks', taksJson);
};

const addSaveTasks = () => {
    const tasks = localStorage.getItem('tasks');
    const tasksArray = JSON.parse(tasks);

    for (let i in tasksArray) {
        addTask(tasksArray[i]);
    };
};

const addTask = (task) => {
    const li = criaLi();
    li.innerText = task;
    addClass(li);
    mostra.appendChild(li);
    save();
};

addBtn.addEventListener('click', function() {
    if (!input.value) return;
    addTask(input.value);
    clearInput();
});

input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!input.value) return;
        addTask(input.value);
        clearInput();
    };
});

document.addEventListener('click', function(e) {
    const ele = e.target;

    if (ele.classList.contains('delete')) {
        ele.parentElement.remove();
        save();
    };
});

addSaveTasks();
