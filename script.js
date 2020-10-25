var css = document.querySelector("h3"); //the originally blank h3 where the hex code will go
var color1 = document.getElementsByClassName("color1")[0]; //left side color button
var color2 = document.getElementsByClassName("color2")[0]; //right side "     "
var body = document.getElementById('gradient');

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


function setGradient() {
	body.style.background='linear-gradient(to right, ' + color1.value + ", " + color2.value + ')';
	css.textContent = body.style.background + ';';
}



//NOTE: code also get it to work by going into the HTML file and setting oninput="setGradient()" instead of
// 		using addEventListener --> however remember seperation of concerns and also we can keep adding more
//		functions and eventListeners --> so go the EventListener route

// 2 small questions that didn't really get answered in the Udemy Q&A:
//1. how can we get the textContent output in hex instead of rgb notation
//2. why does the webpage abruptly turn to color2.value when you scroll to the right side?  