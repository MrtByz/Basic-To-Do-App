
let ulDOM = document.querySelector("#list");
let inputDOM = document.querySelector("#task");
let taskCounter = localStorage.getItem("Item Count") ? localStorage.getItem("Item Count"): 0;
const taskList = localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")): []


window.onload = function(){
  getTasksFromLocalStorage();
}

// <li>3 Litre Su İç <span style="position: absolute; top: 0; right: 0" onclick="deleteElement()" id="liveToastBtn" class="button">Sil</span></li>

function getTasksFromLocalStorage(){
  for (let i=0;i<taskList.length;i++){
    let li = document.createElement(`li`);
    ulDOM.appendChild(li);
    li.setAttribute('onclick', 'addCheckedClass(event)');
  }
}