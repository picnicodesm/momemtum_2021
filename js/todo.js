const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoListCol = document.querySelector("#todo-list li");

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
  saveToDos();
}

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
/*
toDoForm.addEventListener("submit", (e) => {
  const li = document.querySelector("#todo-list li");
  const pary = e.target.parentElement;
  const parY =
    e.target.parentElement.getBoundingClientRect().top + window.pageYOffset;
  const x = `${String(
    e.target.getBoundingClientRect().left + window.pageXOffset
  )}px`;
  const y = `${String(
    e.target.getBoundingClientRect().top + e.target.window.pageYOffset - parY
  )}px`;
  console.log(e.target);
  li.style.position = "absolute";
  li.style.left = x;
  li.style.top = y;
  li.style.transition = "all ease-in-out 2s";
});
*/
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
