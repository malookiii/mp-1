
function addition(){

    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let output = first + second;

    if(output< 0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "white";
    }

    document.getElementById("output").innerHTML= String(output);
}

function subtraction(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let output = first - second;
    
    if(output< 0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "white";
    }

    document.getElementById("output").innerHTML= String(output);
}

function multiplication(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let output = first * second;

    if(output< 0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "white";
    }

    document.getElementById("output").innerHTML= String(output);
}

function division(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);

    let output = first / second;

    if(output< 0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "white";
    }

    document.getElementById("output").innerHTML= String(output);
}

function power(){
    let first = document.getElementById("first").value;
    first = Number(first);

    let second = document.getElementById("second").value;
    second = Number(second);
    let output = 1;
    for(let i = 0; i < second; i++){
        output = first * output
    }
   
    if(output< 0){
        document.getElementById("output").style.color = "red";
    }else{
        document.getElementById("output").style.color = "white";
    }
    document.getElementById("output").innerHTML= String(output);
}

function clearnums(){
    let first = document.getElementById("first").value = "";

    let second = document.getElementById("second").value = "";

    document.getElementById("output").innerHTML= "";
}
