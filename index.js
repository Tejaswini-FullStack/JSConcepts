let Task=[]
function Validate(){
    let input=document.getElementById("Entertask").value.trim()
    if(input==""){
        alert("please enter correct input")
    }
    Task.push({
        text:input,
        completed:false
    })
    displayTask()
    input=document.getElementById("Entertask").value=""
}


function displayTask(){
  const list = document.getElementById("addtask");
  list.innerHTML = "";

  Task.forEach((element,index) => {
    const li = document.createElement("li");
    // li.innerHTML = `
    //   <span 
    //     onclick="toggleComplete(${index})"
    //     style="cursor:pointer; text-decoration:${element.completed ? 'line-through' : 'none'}">
    //     ${element.text}
    //   </span>
    //   <button onclick="deleteTask(${index})">❌</button>
    // `;

      li.innerHTML = `
      <input 
        type="checkbox"
        ${element.completed ? "checked" : ""}
        onchange="toggleComplete(${index})"
      />

      <span style="text-decoration:${element.completed ? 'line-through' : 'none'}">
        ${element.text}
      </span>

      <button onclick="deleteTask(${index})">❌</button>
    `;
    list.appendChild(li);
  });
}

function deleteTask(index){
    Task.splice(index,1)
    displayTask()

}


function toggleComplete(index){
    Task[index].completed=!Task[index].completed
    displayTask()
}


//validation is not equal to adding tasks
//data must be pushed into array
//i validate input stores data into array,render them using foreach and delete using splice