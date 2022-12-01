import { createTask } from "./addTask.js";

export const readTasks = () => {
  const list = document.querySelector("[data-list]");

  const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
  // console.log(tasksList);

  tasksList.forEach((task) => {
    list.appendChild(createTask(task));
    // console.log(createTask(task))
  })
}