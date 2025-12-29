// let object={}
// function Validation(){
//     const name=document.getElementById("name").value.trim()
//     const email=document.getElementById("email").value.trim()
//     const dob=document.getElementById("dob").value
//     const gender=document.getElementById("gender").value
//     const phone=document.getElementById("phone").value.trim()
//     const location=document.getElementById("location").value.trim()
//     const description=document.getElementById("description").value.trim()
  

//     if(name==""||email==""){
//         alert("please enetr valid input")
//         return
//     }
//     object.push({
//         name,
//         email,
//         dob,
//         gender,
//         phone,
//         location,
//         description,
//         photo
//     })
//     addDetails()
// }

// function addDetails(){
//     const table=document.getElementById("profileTable")
//     table.innerHTML=""
//     object.forEach(profile=>{
//         const row=document.createElement("tr")
//         row.innerHTML=`
//         <td>${profile.name}</td>
//         <td>${profile.email}</td>
//         <td>${profile.dob}</td>
//         <td>${profile.gender}</td>
//         <td>${profile.phone}</td>
//         <td>${profile.location}</td>
//         <td>${profile.description}</td>
//         `
//          table.appendChild(row)
//     })
   
// }



let profiles = []; // storage

function Validation() {
  const profile = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    dob: document.getElementById("dob").value,
    gender: document.getElementById("gender").value,
    phone: document.getElementById("phone").value.trim(),
    location: document.getElementById("location").value.trim(),
    description: document.getElementById("description").value.trim()
  };

  // store single profile (overwrite)
  profiles[0] = profile;

  displayProfile();
}

function displayProfile() {
  const table = document.getElementById("profileTable");
  table.innerHTML = "";

  if (profiles.length === 0) return;

  const p = profiles[0];

  // don't show row if everything is empty
  if (
    p.name === "" &&
    p.email === "" &&
    p.dob === "" &&
    p.gender === "" &&
    p.phone === "" &&
    p.location === "" &&
    p.description === ""
  ) return;

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${p.name}</td>
    <td>${p.email}</td>
    <td>${p.dob}</td>
    <td>${p.gender}</td>
    <td>${p.phone}</td>
    <td>${p.location}</td>
    <td>${p.description}</td>
  `;

  table.appendChild(row);
}
