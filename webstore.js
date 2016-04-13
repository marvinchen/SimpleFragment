/*
  To make the navigator object work, choose "Firefox" as the Eclipse browser.
  Window > Preference > General > Web Browser > Use External Browser > 
  Select Firefox > Apply > OK.
  
  Run the HTML script. 
  
  ooo IE works.
  !!! internal Browser does not work yet.
  !!! Chrome is not working yet.
*/

// Random comments
var debugStr="";
var debugFlag = false;

function debugPrint() {
	if (debugFlag) 
		document.getElementById("status").innerHTML = debugStr;

}

function init() {
	debugStr += ">d0<";
	debugPrint();
	if(navigator.geolocation) {
		debugStr += ">d1<";
		debugPrint();
		document.getElementById("notify").innerHTML =  "We are trying to find you";
		navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
	} else {
		debugStr += ">d2<";
		debugPrint();
		document.getElementById("notify").innerHTML = "You browser doesn't support GEO location";
	}
	debugStr += ">init<";
	debugPrint();
}

function successFunc(pos) {
	var lat = pos.coords.latitude;
	var lng = pos.coords.longitude;
	debugStr += ">d3<";
	
	debugPrint();
	document.getElementById("notify").innerHTML = "You are at lat: " +
	lat + " long: " + lng;
}

function errorFunc(pos) {
	var lat = pos.coords.latitude;
	var lng = pos.coords.longitude;
	
	debugStr += ">d4<";
	debugPrint();
	document.getElementById("notify").innerHTML = "You are at lat: " +
	lat + " long: " + lng;
	document.getElementById("notify").innerHTML = "Error";
}

function clearInput() {
	document.getElementById("yourName").value = "";
	debugStr += ">d5<";
	debugPrint();
}

function setName() {
	var userKey = "";
	var userName = document.getElementById("yourName").value;
	
	if(userName === "") return false;
	
	userKey = "kUser" + userName;
	localStorage.setItem(userKey, userName);
	document.getElementById("yourName").value = userName + " Saved";

}

function getName() {
	var userKey = "";
	var userName = document.getElementById("yourName").value;
	
	if(userName === "") return false;
	
	userKey = "kUser" + userName;
	
	document.getElementById("yourName").value = localStorage.getItem(userKey) + " in LocalStore." 
	;
}

function removeName() {
	var userKey = "";
	var userName = document.getElementById("yourName").value;
	
	if(userName === "") return false;
	
	userKey = "kUser" + userName;
	
	localStorage.removeItem(userKey);
	document.getElementById("yourName").value = userName + " Removed";
}

onload = init;