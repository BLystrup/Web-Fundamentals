// Changing text
var h3 = document.querySelector("h3");

function changeTitle() {
    h3.innerText = "New Title";
}

// OnChange function
function chooseLunch (element) {
    alert ("You picked " + element.value);
}

// Input Change
var nameTag = document.querySelector("#name-tag");
function setName(element) {
    console.log(element.value);
    nameTag.innerText = element.value;
}


