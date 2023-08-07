$(".toggleButton").hover(function () {

    $(this).addClass("heighlightButton");

}, function () {

    $(this).removeClass("heighlightButton");

});



$(".toggleButton").click(function () {

    $(this).toggleClass("active");
    $(this).removeClass("heighlightButton");

    var panelid = $(this).attr("id") + "panel";

    $("#" + panelid).toggle();

});

$("iframe").contents().find("html").html($("#htmlpanel").val());

$("textarea").on('change keyup paste', function () {

    $("iframe").contents().find("html").html($("#htmlpanel").val());

});