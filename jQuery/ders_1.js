
// Yalnizca secili p etiketine basilinca gizleme islemi gerceklesir -> this ifadesi
$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });

    // Herhangi bir div'e tiklanirsa hepsi gizlenir
    $("div").click(function () {
        $("div").hide();
    });

});