$(function () {

    // jQuery Silme islemleri

    // Remove islemi -> Secilen elementi tum altinda bulunan elementlerle birlikte siler
    $("#btn-remove").click(function () {
        // listeyi tamamen sil
        $("#removeList").remove();
        // test class'ina sahip olan paragraflari tamamen sil
        $("p").remove(".test");
    });

    // Empty islemi -> Secilen elementin yalnizca icerisinde bulunan alt elementlerini siler
    // ordered list kalir ama icerisindeki li'ler silinir
    $("#btn-empty").click(function () {
        $("#removeList").empty();
    });

    // jQuery CSS manipülasyonu

    // Basliklarimiza renk ekleyelim Bootstrap class'i ekleyerek
    $("#addColor").click(function () {
        // Coklu sekilde (hem h1 hem h2'ler icin) secim yapiyoruz "," ile.
        // Boostrap 5 sinifi ekliyoruz (onune "." eklemeden!)
        $("h1,h2").addClass("text-primary");
    });

    // Ortalanmis bir text'in ortalanma ozelligini kaldirma
    $("#removeCentered").click(function () {
        $("#centeredText").removeClass("text-center");
    });

    // Ortalanmis bir text'in ortalanma ozelligini kaldirma ve tekrar ortalama
    // NOT: toggle metotlari on/off ozelliklerindeki bir switch gibidir
    $("#toggleCentered").click(function () {
        $("#centeredText").toggleClass("text-center");
    });

    // div kutusunun rengini degistirme ve degisen rengi icerisine yazdirma
    $("#changedDiv").click(function () {
        $("#changedDiv").css("background-color", "black");
        $("#changedDiv").text("Color Changed!").addClass("text-center text-white");
    });

});