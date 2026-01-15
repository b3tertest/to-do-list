function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value;

    if (taskText === '') {
        alert("écrit quelque chose.");
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskText}
        <button class="delete-btn" onclick="removeTask(this)">Supprimer</button>
    `;

    document.getElementById('taskList').appendChild(li);
    input.value = ''; 
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}z