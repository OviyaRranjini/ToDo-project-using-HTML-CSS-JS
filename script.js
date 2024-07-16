// script.js

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Array to store tasks
let tasks = [];

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    tasks.push(taskText);
    renderTasks();
    taskInput.value = '';
}

// Render tasks function
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        li.innerHTML += `<button onclick="editTask(${index})">Edit</button>
                         <button onclick="deleteTask(${index})">Delete</button>`;
        taskList.appendChild(li);
    });
}

// Edit task function
function editTask(index) {
    const newTaskText = prompt('Edit task:', tasks[index]);
    if (newTaskText !== null) {
        tasks[index] = newTaskText.trim();
        renderTasks();
    }
}

// Delete task function
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}
