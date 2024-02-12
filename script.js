const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list");

function addTask() {
    if (inputBox.value === '') {
        alert("Please write something");
    } else {
        const li = document.createElement("li");
        li.textContent = inputBox.value;
        
        const deleteButton = document.createElement("span");
        deleteButton.innerHTML = "\u00d7";
        deleteButton.addEventListener("click", deleteTask);
        
        li.appendChild(deleteButton);
        
        listContainer.appendChild(li);
        
        // Enable inline editing when task is created
        li.contentEditable = true;
        
        inputBox.value = "";
        saveData();
    }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("cross");
        saveData();
    }
}, false);

function deleteTask(e) {
    e.target.parentElement.remove();
    saveData();
}

function saveData() {
    localStorage.setItem("dat7", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("dat7");
}

showList();
