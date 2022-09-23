console.log("page loaded...");

// function over(element) {
//     ;    
// }
    
// function out(element) {
//     alert("mouseout");    
// }

// Targeting video element from geeksforgeeks.org
let clip = document.querySelector(".vid")

/* Applying mouseover event on video clip 
and then we call play() function to play 
the video when the mouse is over the video */
clip.addEventListener("mouseover", function (e) {
    clip.play();
})
    
/* Applying mouseout event on video clip 
and then we call pause() function to stop 
the video when the mouse is out the video */
clip.addEventListener("mouseout", function (e) {
    clip.pause();
})

// Video muted
var vid = document.getElementById(".vid");
vid.muted = true;