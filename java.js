console.log("JS is working");

var player1 = {
	name: "Dolphin",
	type: "dolphin"
};
var player2 = {
	name: "Shark",
	type: "shark"
};

// here is another link to a great waveracer song: 
	//www.youtube.com/watch?v=PmE_81l44oc//

// function keyDown() {
// 	player1.addEventListener("keydown", function() {
// 		console.log("player one move");
// 	});
// }
// keyDown();

//PLAYERS
var dolphin = document.querySelector(".dolphindiv");

console.log(dolphin);

var shark = document.querySelector(".sharkdiv");
console.log(shark);

//CLICK EVENT
function testDolphin() {
	dolphin.addEventListener("click", function() {
		alert("clicked dolphin");
	
});
}
testDolphin();

function testShark() {
	shark.addEventListener("click", function() {
		alert("clicked shark");
	
});
}
testShark();

//need to convert these numbers to px strings
var dolphinmove = 10;
var totalmarginf = 0;
var totalmarginj = 0;
var sharkmove = 10;
// number 810 is at end of page
//KEYDOWN EVENT
window.addEventListener("keydown", checkKeyPressed, false);
// window.addEventListener("keypress", dealWithKeyboard, false);
// window.addEventListener("keyup", dealWithKeyboard, false);

	function checkKeyPressed(e) {
    if (e.keyCode == "65") {
    	var string = String(totalmarginf) + 'px';
        // alert("The 'a' key is pressed.");
        
        totalmarginf += dolphinmove;
        console.log(string);
        dolphin.style.marginLeft = string;
        // dolphin.style.marginLeft = totalmargin + dolphinmove;
    } else if (e.keyCode == "66") {
    	// 'b' key pressed
    	var stringb = String(totalmarginj) + 'px';
    	totalmarginj += sharkmove;
    	console.log(stringb);
    	
    	shark.style.marginLeft = stringb;
    }
	
	 function Winner () {
	 	if (string == "810px") {
	 		alert("DOLPHIN WINS!!");
	 	} else if (stringb == "810px") {
	 		alert("SHARK WINS!!");
	 	}
	 }
	 Winner();

	 
 }

 var reset = document.querySelector('.button');
 console.log(reset);
 function resetGame () {
 	reset.addEventListener("click", function() {
 		location.reload();
 		// alert("clicked reset button");
 	});
 	
 }
 resetGame();
// function dealWithKeyboard(e) {
//     // gets called when any of the keyboard events are overheard
    
//     // dolphin.style.border = "5px solid black";
//     dolphin.style.marginLeft = "30px";
//     console.log("kedown worked");
// }