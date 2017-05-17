// Functions.js

function ClickData() {
	var imgId = event.target.id;
	console.log(imgId);
	var el = document.getElementById("MainOverlay");
	var box = document.getElementById("popup");
	el.classList.remove("Hidden");
	box.classList.remove("Hidden");
	console.log("Working"); 
	ImageSwap(imgId);	
}

// closes the Popup box.
function Closing() {
	var el = document.getElementById("MainOverlay");
	var box = document.getElementById("popup");
	el.classList.add("Hidden");
	box.classList.add("Hidden");
	console.log("closed");
	document.getElementById("Pop1").classList.add("Hidden");
	document.getElementById("Pop2").classList.add("Hidden");
	document.getElementById("Pop3").classList.add("Hidden");
	document.getElementById("Pop4").classList.add("Hidden");

}

function ImageSwap(imgId) {
	console.log(imgId);
	if (imgId == 1) {
		console.log("making it!");
		document.getElementById("Pop1").classList.remove("Hidden");
	}
	else if (imgId == 2){
		console.log("my way down!");
		document.getElementById("Pop2").classList.remove("Hidden");
	}
	else if (imgId == 3){
		console.log("town, moving fast!");
		document.getElementById("Pop3").classList.remove("Hidden");
	}
	else if (imgId == 4){
		console.log("having a blast and im home bound!");
		document.getElementById("Pop4").classList.remove("Hidden");
	}
	else{
		console.log("No Id found!")
	}

}