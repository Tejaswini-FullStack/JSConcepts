function inputValidation(){
    let amount=Number(document.getElementById("amount").value)
    let description=document.getElementById("description").value.trim()
    let category=document.getElementById("category").value
    if (isNaN(amount)||amount<=0){
        alert("Invalid input")
        return
    }
      if (description === "") { 
    alert("Description cannot be empty");
    return;
      }
 const expense={amount,description,category}   
        expenses.push(expense)
    displayExpenses()
  AddExpense()
}
let expenses=[]


function displayExpenses(){
    const list=document.getElementById("List")
    list.innerHTML=""
    if(expenses.length===0){
        list.innerText="no expenses added"
        return
    }
    expenses.forEach((exp,index)=>{
        const li=document.createElement("li")
        li.innerHTML=`${exp.description} - ₹${exp.amount} (${exp.category})
         <button onclick="deleteExpense(${index})">❌</button>`
         list.appendChild(li)
    })
}

function AddExpense(){
    const total=expenses.reduce((sum,exp)=>sum+exp.amount,0)
    document.getElementById("result").innerHTML=`Total : ${total}`
}

function deleteExpense(index){
expenses.splice(index,1)
displayExpenses()
AddExpense()
}
