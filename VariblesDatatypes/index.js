// let name=prompt("Enter your name")
// let age=Number(prompt("Enter yourAGE"))
// let isStudent=prompt("True or False")==="true" 
// console.log(name)
// console.log(age)
// console.log(isStudent)
let name = prompt("Enter your name");
let age = Number(prompt("Enter your age"));
let isStudent = prompt("Are you a student? (true/false)") === "true";

document.write("Name: " + name + "<br>");
document.write("Age: " + age + "<br>");
document.write("Student: " + isStudent);

function VoteE(){
    
let x=document.getElementById("num1").value
x=Number(x)
if (isNaN(x)){
    return
}
if(x<18){
    document.getElementById("result").innerHTML="MINOR"
}
else{
   document.getElementById("result").innerHTML="MAJOR"

}
}

// function VoteE() {
//   const x = Number(document.getElementById("num1").value);

//   if (isNaN(x)) {
//     document.getElementById("result").innerHTML = "Please enter a valid number";
//   } 
//   else if (x < 18) {
//     document.getElementById("result").innerHTML = "MINOR ❌";
//   } 
//   else {
//     document.getElementById("result").innerHTML = "MAJOR ✅ (Eligible to vote)";
//   }
// }
