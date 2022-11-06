let addtxtCount = 1
let addradioCount = 1
let addpassCount = 1
let addemailCount = 1
let addcolorCount = 1
let addnumCount = 1
function addText(){
    let ref = prompt("Enter the label : ")
    document.getElementById("containerFormTypes").innerHTML += ref +':' + '<input type="text" class="textBox' + addtxtCount +'"> <br> <br>'
    addtxtCount += 1;
}
function addRadio(){
    lab = prompt("Enter the main label : ")
    document.getElementById("containerFormTypes").innerHTML+=lab+":"

    let lab_ref = 1
    let ref1 = prompt("Enter the label 1 : ")
    document.getElementById("containerFormTypes").innerHTML += ref1 +':' + '<input type="radio" class="radioBox' +  addradioCount.toString() +lab_ref.toString() +'" name="'+addradioCount.toString() +lab_ref.toString()+'">'
    let ref2 = prompt("Enter the label 2 : ")
    document.getElementById("containerFormTypes").innerHTML += ref2 +':' + '<input type="radio" class="radioBox' + addradioCount.toString() +lab_ref.toString() +'" name="'+addradioCount.toString() +lab_ref.toString()+'">'
    addradioCount += 1;
    lab_ref += 1;
}

function addPassword(){
    let ref = "Password : ";
    document.getElementById("containerFormTypes").innerHTML += ref +':' + '<input type="password" class="passBox' + addpassCount +'"> <br> <br>'
    addpassCount += 1;
}

function addEmail(){
    let ref = "Email  ";
    document.getElementById("containerFormTypes").innerHTML += ref +':' + '<input type="email" class="emailBox' + addemailCount +'"> <br> <br>'
    addemailCount += 1;
}


function addColor(){
    let ref = "Colour  ";
    document.getElementById("containerFormTypes").innerHTML += ref +':' + '<input type="color" class="colorBox' + addcolorCount +'"> <br> <br>'
    addemailCount += 1;
}

function addNumber(){
    let ref = "Number  ";
    document.getElementById("containerFormTypes").innerHTML += ref +':' + '<input type="tel" class="numberBox' + addnumCount +'"> <br> <br>'
    addemailCount += 1;
}





