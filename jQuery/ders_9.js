$(function () {
    // Sayfa uzerinde hangi element uzerindeysek onu goruntuleyelim
    $("p, div").mouseenter(function (event) {
        $("#tagType").html(event.relatedTarget.nodeName);
    });

    // Eventimizin hangi element tarafýndan (tag) tetiklendigini bulma
    $("p, a, div").click(function (event) {
        $("#target").html(event.target.nodeName.toLowerCase() + " etiketi tarafýndan tetiklendi bu event!");
    })

    // Element uzerinde kullanilan event turunu bulma
    // Bircok eventi on() metoduna ekleyerek gozlemleyelim
    $("a").on("click dblclick mouseover mouseout", function (event) {
        $("#target").text("Su anki event turu: " + event.type);
    });

    // Fiyat bilgisi girerken yalnizca sayi ve "." kullanilabilmesini saglayan event
    // tuslara tiklandikca bu kontrol yapilir, bu sayede hangi tusa tiklanabilecegine karar verilir
    $("#price").keypress(function (e) {
        // event.key -> basýlan klavye düðmesini alir, static bir sekilde ulasilir
        var chCode = (e.which) ? e.which : event.key;

        // eger gelen tus kodu (HEX degeri gelir) sayilardan olusmuyorsa
        // ve . karakteri de degilse false donsun
        // false donunce event iptal olur, yani basilamaz farkli tusa!
        if (String.fromCharCode(chCode).match(/[^0-9]/g) && chCode != 46)
            return false;
    });
});
