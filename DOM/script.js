(() => {
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
    // parentElement
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    // Task.innerHTML = content
    task.appendChild(taskContent);
    task.appendChild(deleteIcon())
    list.appendChild(task);
  };

  // listener
  // Arrow functions o funciones anonimas
  btn.addEventListener("click", createTask);

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  };

  // IIFE
  const completeTask = (event) => {
    // target and toggle
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  };

  const deleteIcon = () => {
    const i = document.createElement("i");
    i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
    i.addEventListener("click", deleteTask);

    return i;
  };
// parentElement
  const deleteTask = (event) => {
    const parent = event.target.parentElement
    parent.remove()
  };
})();
