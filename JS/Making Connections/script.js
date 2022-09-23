var h1 = document.querySelector("#Jane");

function changeName() {
h1.innerText = "Heidi Doe";
}

var requestOne = document.querySelector("#request-1");
var requestTwo = document.querySelector("#request-2");

function hide() {
    requestOne.remove();
}

function hideAgain() {
    requestTwo.remove();
}