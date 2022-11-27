$(function () {
    // hem tiklandiginda hem de mouse uzerinden cekilince ayni islem yapilsin
    // bu durumda eventler yan yana yazilarak ayni fonksiyon uzerinden yonetilirler
    $("#p-1").on("click mouseleave", function () {
        $(this).css("background-color", "red").css("height", "100px").css("width", "100px");
    });

    $("#p-2").on("click", function () {
        $(this).css("background-color", "red").css("height", "100px").css("width", "100px");
    })

    // butona tiklandiginda paragrafin click ozelligi kapatilsin
    $("#disableBtn").click(function () {
        $("#p-2").off("click");
    });

    // change() ve select() metotlari

});