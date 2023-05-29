    function addTask() {
            var titleInput = document.getElementById("title");
            var dInput = document.getElementById("d");
             var title = titleInput.value;
            var d = dInput.value;
    if (title.trim() === "") {
                alert("Please enter a title for the task.");
                return;
            }
var task = {
                title: title,
                d: d,
                completed: false
            };
var listItem = document.createElement("li");
listItem.innerHTML = '<span class="title">' + task.title + ':</span>' +
                                 '<span class="d">' + task.d + '</span>' +
                                 '<button onclick="completeTask(this)">Complete</button>';
var pendingTasks = document.getElementById("pending-tasks");
            pendingTasks.appendChild(listItem);
        titleInput.value = "";
            dInput.value = "";
        }
        function completeTask(button) {
            var listItem = button.parentNode;
            var completedTasks = document.getElementById("completed-tasks");
            completedTasks.appendChild(listItem);
            button.parentNode.removeChild(button);
            listItem.classList.add("completed");
        }
