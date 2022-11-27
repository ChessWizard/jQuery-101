
// Yalnizca secili p etiketine basilinca gizleme islemi gerceklesir -> this ifadesi
$(function () {
    $("p").click(function () {
        $(this).hide();
    });

    // Herhangi bir div'e tiklanirsa hepsi gizlenir
    $("div").click(function () {
        $("div").hide();
    });

});