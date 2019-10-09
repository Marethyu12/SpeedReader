var words;
var index;
var intrvl;
var paused;
var delay;

function processText() {
	words = $("#textfield").val().split(" ");
	words.forEach((word, index) => words[index] = word.replace(/,\s*$/, ""));
}

function play() {
	index = 0;
	
	intrvl = setInterval(function() {
		if (!paused) {
			if (index == words.length) {
				return;
			}
			
			$("#word").val(words[index++]);
		}
	}, delay);
}

function pause() {
	paused = true;
}

function stop() {
	clearInterval(intrvl);
}