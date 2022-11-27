$(function () {

    // h2 etiketlerinden tiklananin gizlenmesi
    $("h2").click(function () {
        $(this).hide();
    });

    // butona tiklaninca class degeri p-1 olan p etiketlerinin gizlenmesi
    $("#btn-1").click(function () {
        $(".p-1").hide();
    });

    // btn-2 ye tiklaninca tum HTML elementleri gizlensin
    $("#btn-2").click(function () {
        $("*").hide();
    });

    // yalnizca paragraflardan class degeri result olan paragraf gizlenir
    $("#btn-3").click(function () {
        $("p.result").hide();// p'ler secildi, p'lerin icerisinden result class'ina ait olana filtrelendi
    });

    // ilk ul listesinin ilk li'sini gizlemek
    $("#btn-4").click(function () {
        $("ul li:first").hide();
    });

    // tum ul listelerinin ilk li'lerini gizlemek
    $("#btn-5").click(function () {
        $("ul li:first-child").hide();
    });
});
