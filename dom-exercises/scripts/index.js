// when clicking on button, change fontsize and text-color
let changeStyle = function () {
    document.getElementById("myPara").style.fontSize = "60px";
    document.getElementById("myButton").style.color = "red";
};


document.getElementById("myButton").addEventListener("click", changeStyle);


// when "click" submitButton, log value from fname+lname

let logValue = function () {
    console.log(fname.value, lname.value);

};

document.getElementById("submitButton").addEventListener("click", function () {
    logValue();
    event.preventDefault();
});


// when clicking, get attributes
let infoBtn = document.getElementById("infoBtn");
let btn = document.getElementById("btn");
infoBtn.addEventListener("click", function () {
    console.log(
        btn.getAttribute("href"),
        btn.getAttribute("href-lang"),
        btn.getAttribute("target"),
        btn.getAttribute("id"));
});


// Create new section in JS

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let img = document.createElement("img");


document.body.appendChild(div);
div.appendChild(h1);
div.appendChild(p);
div.appendChild(img);

let text1 = document.createTextNode("hej rubrik");
let text2 = document.createTextNode("paragraf");

h1.appendChild(text1);
p.appendChild(text2);


img.setAttribute("src", "../images/bike-away.jpg");
img.setAttribute("width", "700");
img.setAttribute("height", "500");


// table with button to create new row

let row;
let table;

let addRow = function () {
    table = document.getElementById("targettable");
    row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
};

let removeRow = function () {
    document.getElementById("targettable").deleteRow(0);
};


document.getElementById("addRowBtn").addEventListener("click", addRow);
document.getElementById("removeRowBtn").addEventListener("click", removeRow);


// log height and width when resizing
let width;
let height;

// window.onresize = window.onload = function() {
document.body.onresize = function () {
    width = innerWidth;
    height = innerHeight;
    console.log(width + 'x' + height);
};


//log value-attribute and value-new-text
let logTwoValues = function () {
    console.log(ex7.value);
    console.log(ex7.getAttribute("value"));
};

document.getElementById("saveBtn7").addEventListener("click", logTwoValues);


//Second file of exercises:

//enter name, submit
//let input = prompt("please enter your name");
//console.log("Your name is " + input);

let greeting = function () {

    console.log("Welcome " + enterName.value);
};

document.getElementById("nameBtn").addEventListener("click", greeting);


//exercise 2


//exercise 4


let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let displayNum = document.getElementById("displayNum");

let biggestNum = function () {
    if (parseInt(num1.value) < parseInt(num2.value)) {
        displayNum.innerHTML = num2.value.toString();
    }
    else {
        displayNum.innerHTML = num1.value.toString();
    }
};

document.getElementById("numBtn").addEventListener("click", biggestNum);


//Exercise 5, odd or even nr
/*
for(let i=0; i < 11; i++){
if(i % 2 == 1){
    console.log("Sample output: "+ i + " is odd");
}
else if(i % 2 == 0){
    console.log("Sample output: "+ i + " is even");
}

}       */


//Exercise 6, type in full name
/*let space = " ";
let displayName = document.getElementById("displayName");

let input = prompt("Please enter your full name: ");


let splattingString = function (stringToSplit, separator) {
    let arrayOfString = stringToSplit.split(separator);
    displayName.innerHTML = "Your name is: " + arrayOfString[0].toUpperCase() + " " + arrayOfString[1].toLowerCase();
};

splattingString(input, space);
*/


//Extra exercises
//Nr 2: show paragraph when hovering on btn3
let btn3 = document.getElementById("btn3");
let hiddenText = document.getElementById("hiddenText");
hiddenText.style.display = "none";

let in_out = function (e) {
    if (e.type == "mouseover") {
        hiddenText.style.display = "inline-block";
    }
    else if (e.type == "mouseout") {
        hiddenText.style.display = "none";
    }
};

btn3.addEventListener("mouseover", in_out, false);
btn3.addEventListener("mouseout", in_out, false);


//Nr 3: make characters uppercase when user is typing
let makeUp = document.getElementById("makeUpperCase");

let transformInput = function () {
    makeUp.style.textTransform = "uppercase";
};

makeUp.addEventListener("keyup", transformInput);


//Extra Exercise 4: create initials from two name-inputs


let initialBtn = document.getElementById("initialBtn");

let getInitial = function () {
    let initialFirstName = document.getElementById("initialFirstName").value;
    let initialLastName = document.getElementById("initialLastName").value;

    console.log(initialFirstName.charAt(0) + " " + initialLastName.charAt(0));
};

initialBtn.addEventListener("click", getInitial);


//Exercise 7 set Date
/*
let date = new Date();

console.log(date.toDateString() + " " + date.toTimeString().substr(0, 5));


*/


//Exercise 8 object of colors

let colorBtn = document.getElementById("colorBtn");


let colors = {
    1: "red",
    2: "green",
    3: "blue",
    4: "black",
};

let list = Object.keys(colors);

let chooseColor = function () {
    let nrColor = document.getElementById("nrColor").value;
    for (let i of list)
        if (i === nrColor) {
            console.log(i + ": " + colors[i]);

        }
        else {
            console.log("not a color in this list");
            break;
        }
};

colorBtn.addEventListener("click", chooseColor);



//Exercise 9: bank account


let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
const saldoEl = document.getElementById("saldo");
const increaseEl = document.getElementById("increase");
const decreaseEl = document.getElementById("decrease");


const getSaldo = function () {
    const saldo = saldoEl.innerHTML;
    return parseInt(saldo);
};

const getIncrease = function () {
    const increase = increaseEl.value;
    increaseEl.value = "";
    return parseInt(increase);
};

const getDecrease = function () {
    const decrease = decreaseEl.value;
    decreaseEl.value = "";
    return parseInt(decrease);
};

const setSaldo = function (newSaldo) {
    saldoEl.innerHTML = newSaldo;
};

const addSaldo = function () {
    setSaldo(getSaldo() + getIncrease());
};

const subtractSaldo = function () {
    const balance = getSaldo() - getDecrease();
    if (balance < 0) {
        alert("Withdrawal not possible, not enough money in account");
    } else {
        setSaldo(balance);
    }
};


increaseBtn.addEventListener("click", addSaldo);
decreaseBtn.addEventListener("click", subtractSaldo);

