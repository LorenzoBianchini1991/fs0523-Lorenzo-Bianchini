document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-task");

    function createTaskElement(taskText) {
        const taskItem = document.createElement("li");
        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Elimina";
        deleteButton.classList.add("delete-task");

        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(deleteButton);

        taskItem.addEventListener("click", function (event) {
            if (event.target !== deleteButton) {
                taskItem.classList.toggle("completed");
            }
        });

        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        return taskItem;
    }

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskItem = createTaskElement(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = "";
        }
    });
});