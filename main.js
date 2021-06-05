var video = document.getElementById("myVideo");
var btnM = document.getElementById("myBtnM");
var btn = document.getElementById("myBtn");

function Play() {
	if (video.paused) {
		video.play();
		btn.innerHTML = "Pause";
	} 
	else {
		video.pause();
		btn.innerHTML = "Play";
	}
}

function Volume() {
	if (video.muted) {
		video.muted=false;
		btnM.innerHTML = "Mute";
	} 
	else {
		video.muted=true;
		btnM.innerHTML = "Unmute";
	}
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}