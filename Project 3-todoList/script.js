const addTask = document.getElementById("submit-task");
addTask.addEventListener("click", () => {
  const inputedTask = document.getElementById("new-task-input");
  const taskDecription = document.getElementById("desc");
  document.getElementById("new-to-do").style.display = "inherit";
  let task = inputedTask.value;
  taskDecription.classList.add("task");
  taskDecription.title = task;
  taskDecription.innerText = task;
});

const range = document.getElementById("hours-range");
const numRange = document.getElementById("num-on-range");
range.addEventListener("input", () => {
  // numRange.innerText = 10;
  numRange.innerText = range.value + " hours";
  console.log();
});

const saveBtn = document.getElementById("save-btn");
saveBtn.addEventListener("click", saveToDueTasks);

function saveToDueTasks() {
  const taskName = document.getElementById("desc");
  const dueDate = document.getElementById("date-and-time-due");
  const taskDuration = document.getElementById("hours-range");
  const isRepeat = document.getElementById("repeat");
  const tasksContainer = document.getElementById("tasks-contianer");

  const newTaskBlock = document.createElement("DIV");
  const newTaskBlockTitle = document.createElement("DIV");
  const p1 = document.createElement("P");
  const p2 = document.createElement("P");
  const p3 = document.createElement("P");

  p1.innerText = "Due Date";
  p2.innerText = "Due Date";
  p3.innerText = "Due Date";

  newTaskBlockTitle.classList.add("task-title");
  newTaskBlock.classList.add("tasks");
  p1.classList.add("para-meta-task");
  p2.classList.add("para-meta-task");
  p3.classList.add("para-meta-task");
  newTaskBlockTitle.innerText = taskName.innerText;

  newTaskBlock.append(newTaskBlockTitle);
  newTaskBlock.append(p1);
  newTaskBlock.append(p2);
  newTaskBlock.append(p3);
  tasksContainer.append(newTaskBlock);
}
