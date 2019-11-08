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

/**/

function onLoad1() {
    $("#spreed").click(() => {
        localStorage.setItem("words", $("textarea").val().split(" "));//
        //words = $("textarea").val().split(" ");
        console.log(words);
        open("spreeder.html", "_self");
    });
}

function onLoad2() {
    words = localStorage.getItem("words");
    
    $("#play").click(() => {
        console.log("foo");
    });
    
    $("#pause").click(() => {
        console.log("bar");
    });
    
    $("#slider").attr("min", "0");
    $("#slider").attr("max", words.length.toString());
    
    document.getElementById("slider").addEventListener("change", () => {
        console.log(this.value);
    });
}