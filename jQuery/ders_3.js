
$(function () {
    // type'i submit olan butonlarin rengini kirmizi yap
    $("#btn-1").click(function () {
        $(":submit").css("background-color", "red");
    });

    // type'i checkbox olan butonlarin boyutunu 200px yap
    $("#btn-2").click(function () {
        $(":checkbox").css("width", "50px").css("height", "50px");
    });

    // Icerisinde "Chess" kelimesi gecen paragraflari secer ve yazilarini kirmizi yapar ve
    // boyutunu da 34px yapar
    $("#btn-3").click(function () {
        $("p:contains(Chess)").css("color", "red").css("font-size", "34px");
    });

    // Yandex disindaki tum diger icerikli a etiketlerini sec
    // arka planini kirmizi yap
    $("#btn-4").click(function () {
        $("a:not(':contains(Yandex)')").css("background-color", "red");
    });

    // Bos olan div etiketlerini sec ve 
    // icerisine artik bos degilsin yaz
    $("#btn-5").click(function () {
        $("div:empty").html("You are not empty now!");
    });

    // icinde p etiketi bulunan div elemanlari secilir ve
    // icerisine Found! yaz
    $("#btn-6").click(function () {
        $("div:has(p)").html("Found!");
    })

    // h1,h2,h3,... etiketlerinini arka planini mavi yap
    $("#btn-7").click(function () {
        $(":header").css("background-color", "blue");
    });
});
