const myTask = document.getElementById("TodoList");

myTask.addEventListener("submit", (e) => {
  e.preventDefault();
  taskElement();
});

function taskElement() {
  const username = document.getElementById("task").value;
  const newE = document.createElement("p");
  newE.classList = "new-task";
  newE.innerHTML = username;
  const btn = document.createElement("button");
  btn.className = "delete";
  btn.innerHTML = "x";
  btn.addEventListener("click", function () {
    newE.remove();
    btn.remove();
  });
  document.getElementById("container").appendChild(newE);
  document.getElementById("container").appendChild(btn);
}
