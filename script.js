const listContainerDay = document.getElementById(`list_container_day`);
const listContainerNight = document.getElementById(`list_container_night`);



function addTask(type){
    const inputBox = document.getElementById(`input_box_${type}`);
const listContainer = document.getElementById(`list_container_${type}`);
    if(inputBox.value === ''){
        alert("você precisa escrever uma tarefa!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = "";
    
}

function toggleCheckBox(e){
    console.log(e.target.tagName)
    if(e.target.tagName.toLowerCase() === "li"){
        e.target.classList.toggle("checked");
        
    }
    else if(e.target.tagName.toLowerCase()  === "span"){
        e.target.parentElement.remove();
        
    }
}

listContainerDay.addEventListener("click",toggleCheckBox)
listContainerNight.addEventListener("click",toggleCheckBox)


