function addSum() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let sum = parseInt(a) + parseInt(b);
    let output1 = document.getElementById("output");
    output1.innerHTML = "<b>Addition is:  " + sum + "</b>";
}

function multiply() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let sum = parseFloat(a) * parseFloat(b);
    let output1 = document.getElementById("output");
    output1.innerHTML = "<b>Multiplication is:  " + sum + "</b>";
}

function division() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let div = parseFloat(a) / parseFloat(b);
    let output1 = document.getElementById("output");
    output1.innerHTML = "<b>Division is:  " + div + "</b>";
}

function subtraction() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    let sub = parseFloat(a) - parseFloat(b);
    let output1 = document.getElementById("output");
    output1.innerHTML = "<b>Subtraction is:  " + sub + "</b>";
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}