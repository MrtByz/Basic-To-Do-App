
let ulDOM = document.querySelector("#list");
let inputDOM = document.querySelector("#task");
let taskCounter = localStorage.getItem("Item Count") ? localStorage.getItem("Item Count") : 0;
const taskList = localStorage.getItem("Tasks") ? JSON.parse(localStorage.getItem("Tasks")) : []


window.onload = function () {
	getTasksFromLocalStorage();
}

// <li>3 Litre Su İç <span style="position: absolute; top: 0; right: 0" onclick="deleteElement()" id="liveToastBtn" class="button">Sil</span></li>

function addSpan(liNode){
	var spanNode = document.createElement(`span`)
	liNode.appendChild(spanNode); 
	spanNode.innerHTML= "&times;";
	spanNode.setAttribute(`class`,`close`);
	spanNode.setAttribute(`onclick`,`deleteElement(event)`);
}


function getTasksFromLocalStorage() {
	for (let i = 0; i < taskList.length; i++) {
		let li = document.createElement(`li`);
		li.appendChild(document.createTextNode(taskList[i]));
		ulDOM.appendChild(li);
		li.setAttribute('onclick', 'checkTask(event)');
		addSpan(li);
	}
}

function addElement() {
	if (inputDOM.value == null || inputDOM.value == "") {
		alert("Taskı girmediniz!!");
		inputDOM.value = "";
	}
	else {
		// Yeni taskı listeye ekledik
		taskList.push(inputDOM.value);
		// localStoragedaki task listesini güncelledik
		localStorage.setItem(`Tasks`, JSON.stringify(taskList))
		var liNode = document.createElement(`li`);
		// Taskın textini li elementine ata
		var liTaskText = document.createTextNode(inputDOM.value);
		ulDOM.appendChild(liNode);
        liNode.appendChild(liTaskText);
        liNode.setAttribute(`onclick`,`checkTask(event)`);
		
		// Silme butonu ekleme
		addSpan(liNode);
		inputDOM.value = "";
	}
}


function deleteElement(event){
    // Event hangi nodedan tetiklendiyse nodeun adını çekiyoruz
    let node = event.target; 
    // li nodeunun task listesindeki konumunu alıyoruz
    let indexOfTask = taskList.indexOf(node.parentNode.childNodes[0].nodeValue);
    // Listeden siliyoruz
    taskList.splice(indexOfTask, 1);
    // Local storage güncelliyoruz
    localStorage.setItem(`Tasks`,JSON.stringify(taskList));
    // liyi siliyoruz
    node.parentNode.remove();   
};

function checkTask(event){
	// ilgili node tamamlandı işaretleme 
	let node = event.target;
	node.classList.toggle(`checked`);
}




