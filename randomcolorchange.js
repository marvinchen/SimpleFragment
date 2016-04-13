var count = 0;
var tImgCounter = 0;

function init(){
	var h1tags = document.getElementsByTagName("h1");
	// An array of h1 tags
	h1tags[0].onclick = changeColor;
}

function changeColor(){
	this.innerHTML = "Click again";
	// Refer to en.wikipedia.org/wiki/List_of_colors:_A-F
	var randomNum = Math.random();
	var randomcolor = '#'+Math.floor(randomNum*16777215).toString(16);
	
	// document.getElementById("demo1").innerHTML=randomNum.toString(16);
	
	this.style.color = randomcolor;
	this.innerHTML = "Click Again";
	if (count%2 == 0){
	  document.getElementById("demo").innerHTML="changeColor 0-" + randomcolor;
	} else {
	  document.getElementById("demo").innerHTML="changeColor 1-" + randomcolor;
	}
	count++;
}

function toggleImg() {
	var img = document.getElementById("danceImg");
	var isImgVisible = img.style.visibility != "visible";
	img.style.visibility = isImgVisible ? "visible" : "hidden";
	document.getElementById("demo1").innerHTML = tImgCounter.toString(16);
	tImgCounter++;
}


onload = init;