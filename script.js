function onLoad1() {
    $("#spreed").click(() => {
        localStorage.setItem("wpm", parseInt($("#textfield").val()));
        localStorage.setItem("txt", $("textarea").val());
        open("spreeder.html", "_self");
    });
}

function onLoad2() {
    var wpm = localStorage.getItem("wpm");
    var words = localStorage.getItem("txt").split(" ");
    
    var index = -1;
    var delay = 60000 / wpm;
    var intrvl;
    var intrvlRunning = false;
    var paused = false;
    
    $("#play").click(() => {
        if (!intrvlRunning) {
            intrvlRunning = true;
            
            intrvl = setInterval(() => {
                if (paused) {
                    return;
                }
                
                if (index == words.length) {
                    index = -1;
                    intrvlRunning = false;
                    clearInterval(intrvl);
                }
                
                ++index;
                
                $("#slider").val(index);
                $("#slider").trigger("change");
                $("#box").html(words[index]);
            }, delay);
        }
        
        if (paused) {
            paused = false;
        }
    });
    
    $("#pause").click(() => {
        paused = true;
    });
    
    $("#slider").attr("min", "0");
    $("#slider").attr("max", words.length.toString());
    $("#slider").on("input", () => {
        paused = true;
        index = parseInt($("#slider").val());
        $("#box").html(words[index]);
    });
}