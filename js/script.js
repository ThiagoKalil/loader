$(document).ready(function() {
    $("#loader").modal("show");

    $(".jumbotron").hide();
    $(".container").hide();
    $(".navbar").hide();
    $(".rodape").hide();
    $(".carousel").hide();

    setTimeout(function() {
        $("#loader").modal("hide");

        $(".jumbotron").fadeToggle("slow");
        $(".container").fadeToggle("slow");
        $(".navbar").fadeToggle("slow");
        $(".rodape").fadeToggle("slow");
        $(".carousel").fadeToggle("slow");
    }, 3000);
});