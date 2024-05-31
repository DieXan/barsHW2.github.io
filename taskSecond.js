const addButton = document.querySelector("#addButton")
const taskText = document.querySelector("#taskInput")

const addTask = () =>{
    const taskContainer = document.querySelector(".task")
    const tasks = document.querySelectorAll(".taskElement")

    const task = document.createElement("div");

    task.classList.add("row", "taskElement")
    task.innerHTML = `<p>${taskText.value}</p>`

    const taskCheckbox = document.createElement("input")

    taskCheckbox.setAttribute("type", "checkbox")
    taskCheckbox.addEventListener("change", ()=>{
        if(taskCheckbox.checked){
            task.classList.add("line-through")
        }else{
            task.classList.remove("line-through")
        }
    })
    task.appendChild(taskCheckbox)
    taskContainer.appendChild(task)

    taskText.value = ""
    addButton.setAttribute("disabled", false)
}

taskText.addEventListener("change", ()=>{
    if(taskText.value.trim() != ''){
        addButton.removeAttribute("disabled");
    }
    
})

addButton.addEventListener("click", addTask);