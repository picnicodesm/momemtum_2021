const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoListCol = document.querySelector("#todo-list li");

function deleteToDo(event) {
  const li = event.target.parentElement;

  li.animate(
    [
      { transform: "none" },
      {
        transform: "translateX(-1000px)",
      },
    ],
    {
      easing: "ease-in-out",
      duration: 300,
    }
  );

  setTimeout(() => {
    li.remove();
  }, 300);

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
  const button = document.createElement("div");
  button.innerHTML = `<i class="fas fa-times"></i>`;
  button.addEventListener("click", deleteToDo);
  const prelistbgHeight = toDoList.offsetHeight;
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  const posArr = testf(event);
  const listY = li.getBoundingClientRect().top + window.pageYOffset;
  const constNum = 77;
  const listWidth = li.offsetWidth;
  const listbgHeight = toDoList.offsetHeight;
  console.log(
    posArr[1],
    listY,
    listY - (posArr[1] + 65),
    listbgHeight,
    prelistbgHeight
  );
  toDoList.animate(
    [
      { height: `${prelistbgHeight}px`, offset: 0, zIndex: 90 },
      {
        height: `${listbgHeight}px`,
        offset: 0.6,
      },
      {
        height: `${listbgHeight}px`,
        offset: 1,
      },
    ],
    {
      easing: "ease-in-out",
      duration: 1000,
    }
  );

  li.animate(
    [
      {
        transform: `translateY(-${constNum}px)`,
        width: `${listWidth}px`,
        position: "absolute",
        offset: 0,
      },
      {
        width: `${listWidth}px`,
        transform: `translateY(-${constNum}px)`,
        position: "absolute",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        offset: 0.2,
      },
      {
        width: `${listWidth}px`,
        position: "absolute",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        offset: 0.8,
      },
      {
        width: `${listWidth}px`,
        transform: `translateY(${listY - (posArr[1] + constNum)}px)`,
        position: "absolute",
        offset: 1,
      },
    ],
    {
      easing: "ease-in-out",
      duration: 1000,
    }
  );
}

function paintToDoList(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("div");
  button.innerHTML = `<i class="fas fa-times"></i>`;
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

function checkEnter(event) {
  const keyCode = event.keyCode;
  console.log(keyCode);

  if (keyCode === 13) {
    handleToDoSubmit(event);
  } else {
    return;
  }
}

toDoForm.addEventListener("keydown", checkEnter);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDoList);
}
