var likesOne = 9
var likesTwo = 12
var countOne = document.querySelector("#count-one")
var countTwo = document.querySelector("#count-two")
var countThree = document.querySelector("#count-three")

// console.log(countOne);

function addOne(element) {
    likesOne++;
    countOne.innerText = likesOne + " like(s)";
}

function addTwo(element) {
    likesTwo++;
    countTwo.innerText = likesTwo + " like(s)";
}

function addThree(element) {
    likesOne++;
    countThree.innerText = likesOne + " like(s)";
}
