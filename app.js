// Write our JavaScript in here
alert("HELLO FROM APP.JS!");
var pics = [
	"imgs/horse1.png",	//0
	"imgs/horse2.png",	//1
	"imgs/horse3.png",	//2
	"imgs/horse4.png",	//3
	"imgs/horse5.png",	//4
	"imgs/horse6.png"		//5
						//6
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
	if(counter === 6){
		counter = 0;
	}
	img.src = pics[counter]
	counter = counter + 1;
});

