var video;

// window.addEventListener("load", function() {
// 	console.log("Good job opening the window")

// });

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });


window.addEventListener("load", function() {
	console.log("Good job opening the window");
  
	video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;
	video.volume = 1;
  
	document.getElementById("play").addEventListener("click", function() {
	  console.log("Play Video");
	  video.play();
	  console.log("Volume: " + video.volume);
	  document.getElementById("volume").innerHTML = video.volume*100 + "%";
	});
  
	document.getElementById("pause").addEventListener("click", function() {
	  console.log("Pause Video");
	  video.pause();
	});
  
	document.getElementById("slower").addEventListener("click", function() {
	  console.log("Slow Down");
	  video.playbackRate -= 0.1;
	  console.log("New Speed: " + video.playbackRate);
	});
  
	document.getElementById("faster").addEventListener("click", function() {
	  console.log("Speed Up");
	  if (video.playbackRate < 3) {
		video.playbackRate += 0.1 * video.playbackRate;
	  } else {
		video.playbackRate = 3;
	  }
	  console.log("New Speed: " + video.playbackRate);
	});
  
	document.getElementById("skip").addEventListener("click", function() {
	  console.log("Skip Ahead");
	  if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	  } else {
		video.currentTime = 0;
	  }
	  console.log("Current Location: " + video.currentTime);
	});
  
	document.getElementById("mute").addEventListener("click", function() {
	  if (video.muted == false) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	  } else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	  }
	});
  
	document.getElementById("slider").addEventListener("input", function() {
	  video.volume = this.value / 100;
	  document.getElementById("volume").innerHTML = this.value + "%";
	});
  
	document.getElementById("vintage").addEventListener("click", function() {
	  video.classList.add("oldSchool");
	});
  
	document.getElementById("orig").addEventListener("click", function() {
	  video.classList.remove("oldSchool");
	});
  
  });
  
