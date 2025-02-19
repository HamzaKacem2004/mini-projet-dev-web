function addTask() {
    let input = document.getElementById("taskInput");
    let day =document.getElementById("taskDay")
    let taskText = input.value.trim();
    let taskDay=day.value.trim();
    if (taskText === "") return;
    if (taskDay=== "") return;
    let li = document.createElement("li");
    li.innerHTML = `${taskDay}:${taskText}<button class='delete' onclick='removeTask(this)'>Supprimer</button>`;
    document.getElementById("taskList").appendChild(li);
    input.value = "";
    day.value= "";
}
function removeTask(button) {
    button.parentElement.remove();
}