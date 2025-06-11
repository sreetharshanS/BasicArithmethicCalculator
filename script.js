function getValues(){
    const num1 = Number(document.getElementById("input1").value);
    const num2 = Number(document.getElementById("input2").value);
    return [num1,num2]; 
}

function add(){
    console.log("add Called")
    const [num1,num2] = getValues();
    let result = num1 +num2;
     document.getElementById("resultDiv").innerText = `The Result is: ${result}`;
}

function sub(){
    const [num1,num2] = getValues();
     let result = num1 -num2;
     document.getElementById("resultDiv").innerText = `The Result is: ${result}`;
}
function mul(){
    const [num1,num2] = getValues();
     let result = num1 * num2;
     document.getElementById("resultDiv").innerText = `The Result is: ${result}`;
}
function div(){
    const [num1,num2] = getValues();
     if(num2 == 0){
        document.getElementById("resultDiv").innerText= "Cannot Divide the Number by Zero"
     }
     else {
     let result = num1 /num2;
     document.getElementById("resultDiv").innerText = `The Result is: ${result}`;
    }
}
function clearvalue(id) {
    console.log("Clear Called");
    document.getElementById(`${id}`).value = "";
    document.getElementById("resultDiv").innerText = ""; // Optionally clear result too
}
// This program is used to execute a basic arithmethic calculator with basic functions(add,sub,mul,div) .