import { createTask } from "./addTask.js";
import { uniqueDates } from "../services/date.js";
import dateElement from "./dateElement.js";

export const readTasks = () => {
  const list = document.querySelector("[data-list]");

  const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
  // console.log(tasksList);
  const dates = uniqueDates(tasksList);

  dates.forEach( date => {
    console.log(date)
  })

  tasksList.forEach((task) => {
    list.appendChild(dateElement(task.dateFormat));
    list.appendChild(createTask(task));
    // console.log(createTask(task))
  });
};
