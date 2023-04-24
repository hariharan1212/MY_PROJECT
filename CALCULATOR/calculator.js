
let outputscreen= document.querySelector("#screen")

function clr(){
    outputscreen.value = "";
}

function del(){
    outputscreen.value = outputscreen.value.slice(0,-2)
}

function display(num){
    outputscreen.value += num ;
}

function equal() {
    try{
        outputscreen.value=eval(outputscreen.value);
    }
    catch{
        outputscreen.value= "SyntaxError";
    }
    
}