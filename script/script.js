$(document).ready(function() {
    $("#hidden").hover(function() {
        $(this).css("color", "black");
    },
    // callback function
    function() {
        $(this).hide();
    });
    // linking to button
    $("button").click(function() {
        alert("I'm alerting you");
    });
});