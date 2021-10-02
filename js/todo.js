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

function paintToDo(newTodo, event) {
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
  const posArr = testf(event);
  const listX = li.getBoundingClientRect().left + window.pageXOffset;
  const listY = li.getBoundingClientRect().top + window.pageYOffset;
  console.log(posArr[1], listY);
  li.style.nth -
    child(2).animate(
      [
        {
          transform: `translateY(${posArr[1] - listY}px)`,
          position: "absolute",
        },
        {
          transform: "none",
          position: "absolute",
        },
      ],
      {
        easing: "linear",
        delay: 300,
        duration: 1000,
      }
    );
}

function paintToDoList(newTodo) {
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
  paintToDo(newTodoObj, event);
  saveToDos();
}

function testf(event) {
  const x = event.target.getBoundingClientRect().left + window.pageXOffset;
  const y = event.target.getBoundingClientRect().top + window.pageYOffset;
  return [x, y];
}

toDoForm.addEventListener("change", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDoList);
}
