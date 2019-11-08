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
    
    var b = true;
    var index = -1;
    var delay = 60000 / wpm;
    var intrvl;
    var intrvlRunning = false;
    var paused = false;
    
    $("#togglebutton").click(() => {
        if (b) {
            if (!intrvlRunning) {
                intrvlRunning = true;
                
                intrvl = setInterval(() => {
                    if (paused) {
                        return;
                    }
                    
                    if (index == words.length) {
                        index = -1;
                        intrvlRunning = false;
                        
                        $("#togglebutton").val("Play");
                        b = true;
                        
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
            
            $("#togglebutton").val("Pause");
            b = false;
        } else {
            paused = true;
            $("#togglebutton").val("Play");
            b = true;
        }
    });
    
    $("#slider").attr("min", "0");
    $("#slider").attr("max", words.length.toString());
    $("#slider").on("input", () => {
        paused = true;
        index = parseInt($("#slider").val());
        $("#box").html(words[index]);
        $("#togglebutton").val("Play");
        b = true;
    });
}