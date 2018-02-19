var pianoSounds = ['G-flat','G','A','B','C-sharp','C','D','E','F'];
var drumSounds = ["clap", "hihat", "kick", "openhat", "boom", "ride", "snare", "tom", "tink"];
var pianoFiles = ["g-flat"]
//____________________________________________________________________
//	Section below. Funciton to switch sounds from drums to piano 
//		and change background/text
//____________________________________________________________________

function determineInstrument(){
	//console.log(button.value)
	if(!this.value) return;
	if(this.value === "piano"){
		console.log("piano man");

		updateSettings();
	}
	else{
		console.log("little drummer boy");
		removeUpdates();
	}
};


function updateSettings(){
	document.body.style.backgroundImage = "url('assets/images/piano.jpg')";

	var spans = document.querySelectorAll('span');
	for(var i=0; i<spans.length; i++){
		spans[i].innerHTML = pianoSounds[i];  //   this will change the text to correlate with the appropriate instruments
	}
	var sounds = document.querySelectorAll('audio');
	for(var i=0; i<sounds.length; i++){
		sounds[i].src = "assets/sounds/" + pianoSounds[i] + ".wav";
	}
	console.log("new audio files");
	console.log(sounds);

// still need to change words on boxes to show note

}

function removeUpdates(){
	document.body.style.backgroundImage = "url('assets/images/music.jpg')";
	var spans = document.querySelectorAll('span');
	for(var i=0; i<spans.length; i++){
		spans[i].innerHTML = drumSounds[i];  //   this will change the text to correlate with the appropriate instruments
	}

	var sounds = document.querySelectorAll('audio');
	for(var i=0; i<sounds.length; i++){
		sounds[i].src = "assets/sounds/" + drumSounds[i] + ".wav";
	}
	console.log("new audio files");
	console.log(sounds);
	//console.log(sounds[0].src);



}

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
	this.classList.remove("played"); // removes transitions 
}

function animateKey(key){
	key.classList.add("played") // animates the key; should have just put this in the playSound function
}

//____________________________________________________________________
// 				invoke functions below
//____________________________________________________________________


window.addEventListener("keydown", playSound);  // listens for a key to be pushed and plays sound if there is one corresponding to that key code

var buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener("click", determineInstrument)); // check's button for pion/drums to change settins
console.log(buttons);
var keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeAnimationKey));  // checks to sey whick key transitioned and then resets it
console.log(keys);


