$(function() {
    $("#textinput").on("keydown", function(event) {
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
            "90": "c0"
        };
        $("#log").append(" " + x[event.which]);
        // $("#log").append(" " + event.which);
    });
});
