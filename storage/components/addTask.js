import checkComplete from './checkComplete.js';
import deleteIcon from './deleteIcon.js';
import { displayTasks } from './readTasks.js';

export const addTask = (evento) => {
  evento.preventDefault();

  const list = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const calendar = document.querySelector("[data-form-date]")
  
  // Guardar los datos en las lista
  // console.log(taskList)
  
  // const value = input.value
  const value = input.value;
  const date = calendar.value
  // moment -> librery moment
  const dateFormat = moment(date).format('DD/MM/YYYY')
  
  if (value === '' || date === '') {
    return 
    // console.log('No crear la tarea')
  }

  // console.log(dateFormat)
  
  input.value = '';
  calendar.value = '';
  
  const taskObj = {
    value,
    dateFormat,
  };
  
  list.innerHTML = '';

  const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList.push(taskObj);
  localStorage.setItem("tasks", JSON.stringify(taskList))

  displayTasks()
  // const task = createTask(taskObj)
}


export const createTask = ({ value, dateFormat }) => {
  const task = document.createElement('li');
  task.classList.add('card');

  //backticks
  const taskContent = document.createElement('div');
  // console.log(value, dateFormat)

  const titleTask = document.createElement('span');
  titleTask.classList.add('task');
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  // task.innerHTML = content;

  const dateElement = document.createElement("span")
  dateElement.innerHTML = dateFormat
  task.appendChild(taskContent);
  task.appendChild(dateElement)
  task.appendChild(deleteIcon());
  return task;
};
