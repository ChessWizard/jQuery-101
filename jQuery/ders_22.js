$(function () {

    // Traversing -> Siblings(kardes) durumlari

    // 1) h2 elementinin tum kardes ogelerini dondur
    $("#secondHeaderSiblings").click(function () {
        // Kardesleri gosterilecek element farkli bir renge boyansin ki belli olsun
        $("h2").css("border-color", "green");
        // h2 ile kardes olan tum elementlere ulasilir ve css ozellikleri degistirilir
        $("h2").siblings().css({
            "color": "red",
            "border": "2px solid red",
            "font-size": "32px"
        });
    });

    // 2) h2'nin paragraf kardeslerinin gorunumu degistirilsin
    $("#paragraphSiblings").click(function () {
        $("h2").css("border-color", "green");
        $("h2").siblings("p").css({
            "color": "red",
            "border": "2px solid red",
            "font-size": "32px"
        });
    });
    
    // 3) h2'den bir sonraki elementi dondur
    $("#nextToSecondHeader").click(function () {
        $("h2").css("border-color", "green");
        $("h2").next().css({
            "color": "red",
            "border": "2px solid red",
            "font-size": "32px"
        });
    });
});
