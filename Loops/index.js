function Table(){
    let num=document.getElementById("num1").value
    num=Number(num)
    if(isNaN(num)){
        return
    }
    let res=""
    for(let i=1;i<=10;i++){
        res+=`${num}*${i}=${num*i}<br>`
    }
        document.getElementById("result").innerHTML=res

}

// function Table(){
//   let num = Number(document.getElementById("num1").value);
//   if (isNaN(num)) return;

//   let res = "";
//   for(let i = 1; i <= 10; i++){
//     res += `${num} x ${i} = ${num*i}<br>`;
//   }
//   document.getElementById("result").innerHTML = res;
// }
