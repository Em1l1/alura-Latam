const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";

  //backtricks
  const taskContent = document.createElement("div");

  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerHTML = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask)
  
  const content = `
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
  
  task.appendChild(taskContent);
  list.appendChild(task);
  console.log(content);
};

console.log(btn);

// listener
// Arrow functions o funciones anonimas
btn.addEventListener("click", createTask);

const checkComplete = () => {
  const i = document.createElement("i");
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completeTask)
  return i;
};

const completeTask = (event) => {
  // console.log("Complete Task")
  const element = event.target
  element.classList.toggle("fas")
  element.classList.toggle("completeIcon")
  element.classList.toggle("far")
  
}
