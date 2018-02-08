

var count = 0;
var style = document.body.style;
var background = document.body.style;

// function updateBackground(){
// 	console.log(count);
// 	if ((count % 2) === 0){
// 	console.log("image should be concert");
// 	background.backgroundImage = "url('assets/images/music.jpg')";
// 	background.backgroundRepeat = "no-repeat";
// 	background.backgroundSize = "cover";
// 	background.height = "50%";
// 	return;
// 	}
// 	else{
// 		console.log("image should be piano");
// 	background.backgroundImage = "url('assets/images/piano.jpg')";
// 	background.height = "100%";
// 	}
// }

//____________________________________________________________________
//	Section below. Funciton to switch sounds from drums to piano
//____________________________________________________________________


var button = document.querySelector("button");


button.addEventListener("click",  function(){
	console.log("you clicked a button");
});

//____________________________________________________________________
//		Section Below: logic to play sound and display letter pressed
//____________________________________________________________________


function playSound(event){
	var audio = document.querySelector(`audio[data-keyCode="${event.keyCode}"]`);
	var key = document.querySelector(`.key[data-keyCode="${event.keyCode}"]`);
	if(!audio) return;
	audio.currentTime = 0;  //resets sound in case it's already playing
	audio.play();   // plays the sound on keystroke
	animateKey(key);
}

function removeAnimationKey(key) {
	//console.log("removeAnimationKey function invoked");
	this.classList.remove("played"); // removes tranistions 
}

function animateKey(key){
	key.classList.add("played") // animates the key; should have just put this in the playSound function
}

window.addEventListener("keydown", playSound);

var keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeAnimationKey))

// var animated = document.querySlector(".played", removeAnimationKey);





