$(function() {
    var x = {
        "80": "a10",
        "79": "a9",
        "73": "a8",
        "85": "a7",
        "89": "a6",
        "84": "a5",
        "82": "a4",
        "69": "a3",
        "87": "a2",
        "81": "a1",
        "186": "b10",
        "76": "b9",
        "75": "b8",
        "74": "b7",
        "72": "b6",
        "71": "b5",
        "70": "b4",
        "68": "b3",
        "83": "b2",
        "65": "b1",
        "80": "c10",
        "191": "c9",
        "190": "c8",
        "188": "c7",
        "77": "c6",
        "78": "c5",
        "66": "c4",
        "86": "c3",
        "67": "c2",
        "88": "c1",
        "90": "c0",
        "16": "s",
    };
    var shiftDownFlag = false,
        index = "0",
        startPos = 0,
        currentPos = 0,
        shiftPressFlag = true,
        lastPos = 0,
        lastLength = 0,
        firstKey = 0;

    $("#textinput").on("keydown", function(e) {
        var length = $(this).val().length;

        if (x[e.which] === "s") {
            shiftDownFlag = true;
            shiftPressFlag = true;
            // $("#log").append("shift1<br>");
        } else if (shiftDownFlag && x[e.which] != undefined && x[e.which] != "s") {
            e.preventDefault();
            firstKey = e.which;
            index = x[e.which].substr(0, 1);
            startPos = parseInt(x[e.which].substr(1, 2));
            currentPos = startPos;
            shiftDownFlag = false;
            // $("#log").append(index + " " + startPos + "<br>");
        } else if (shiftPressFlag && x[e.which] != undefined && x[e.which] != "s" && index != "0") {
            e.preventDefault();
            lastPos = currentPos;
            currentPos = parseInt(x[e.which].substr(1, 2));
            if (currentPos >= lastPos) {
                lastLength += startPos - lastPos;
                startPos = currentPos;
            }
            $(this).selectRange(length - (lastLength + startPos - currentPos), length);
            // $("#log").append(index + " " + currentPos + "<br>");
        }
    });
    $("#textinput").on("keyup", function(e) {
        var length = $(this).val().length;
        if (x[e.which] === "s") {
            $(this).val($(this).val().slice(0, length - (lastLength + startPos - currentPos)));
            shiftPressFlag = false;
            index = "0";
            startPos = 0;
            currentPos = 0;
            shiftPressFlag = true;
            lastPos = 0;
            lastLength = 0;
            firstKey = 0;
        }
    });
});
