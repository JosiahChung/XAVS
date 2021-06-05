//-------
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
// -----------
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}