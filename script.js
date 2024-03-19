let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== '') {
        let li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', toggleTask);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function toggleTask() {
    this.classList.toggle('completed');
}

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
