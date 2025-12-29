function getValues(){
    n1=document.getElementById("num1").value
    n2=document.getElementById("num2").value
    if (n1==""|| n2==""){
        alert("please enter both values")
        return null;
    }
    n1=Number(n1)
    n2=Number(n2)
    if (n1==NaN||n2==NaN){
        alert("enter number only")
        return null
    }
    return {n1,n2}
}

function add(){
    values=getValues()
    if (values==null){
        return
    }
    let {n1,n2}=values
    result=n1+n2
    document.getElementById("result").innerHTML="Result= "+result
}

function sub(){
    values=getValues()
    if(!values){
        return
    }
    let n1=values.n1
    let n2=values.n2
    result=n1-n2
    document.getElementById("result").innerHTML="Result ="+result
}

function mul(){
    values=getValues()
    if(!values){
        return
    }
    n1=values.n1
    n2=values.n2
    result=n1*n2
    document.getElementById("result").innerHTML="Result ="+result
}

function div(){
    values=getValues()
    if(!values){
        return
    }
    n1=values.n1
    n2=values.n2
    result=n1/n2
    document.getElementById("result").innerHTML="Result ="+result
}