var video;

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")

// });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


window.addEventListener("load", function() {
	console.log("Good job opening the window");
  
	// Initialize the video element and turn off autoplay and looping
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
  
	// Play Button - play the video and update the volume information
	document.getElementById("play").addEventListener("click", function() {
	  console.log("Play Video");
	  video.play();
	  console.log("Volume: " + video.volume);
	});
  
	// Pause Button - pause the video
	document.getElementById("pause").addEventListener("click", function() {
	  console.log("Pause Video");
	  video.pause();
	});
  
	// Slow Down - slow the current video speed by 10% each time the button is clicked and log the new speed to the console
	document.getElementById("slower").addEventListener("click", function() {
	  console.log("Slow Down");
	  video.playbackRate -= 0.1;
	  console.log("New Speed: " + video.playbackRate);
	});
  
	// Speed Up - increase the current video speed each time the button is clicked and log the new speed to the console
	document.getElementById("faster").addEventListener("click", function() {
	  console.log("Speed Up");
	  if (video.playbackRate < 3) {
		video.playbackRate += 0.1 * video.playbackRate;
	  } else {
		video.playbackRate = 3;
	  }
	  console.log("New Speed: " + video.playbackRate);
	});
  
	// Skip Ahead - advance the current video by 10 seconds. If the video length has been exceeded, go back to the start of the video - no farther. Log the current location of the video.
	document.getElementById("skip").addEventListener("click", function() {
	  console.log("Skip Ahead");
	  if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	  } else {
		video.currentTime = 0;
	  }
	  console.log("Current Location: " + video.currentTime);
	});
  
	// Mute - mute/unmute the video and update the text in the button
	document.getElementById("mute").addEventListener("click", function() {
	  if (video.muted == false) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	  } else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	  }
	});
  
	// Volume Slider - change the volume based on the slider and update the volume information
	document.getElementById("slider").addEventListener("input", function() {
	  video.volume = this.value / 100;
	  document.getElementById("volume").innerHTML = this.value + "%";
	});
  
	// Old School - utilize the existing oldSchool class on the video element
	document.getElementById("vintage").addEventListener("click", function() {
	  video.classList.add("oldSchool");
	});
  
	// Original - remove the oldSchool class from the video
	document.getElementById("orig").addEventListener("click", function() {
	  video.classList.remove("oldSchool");
	});
  
  });
  
