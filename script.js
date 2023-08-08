const inputBtn = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask (){
    if(inputBtn.value === ""){
        alert("you must write something")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBtn.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBtn.value = ""
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
})

function  saveData() {
    localStorage.setItem("Data", listContainer.innerHTML)
}
function displayData (){
    listContainer.innerHTML = localStorage.getItem("Data")
}
displayData()