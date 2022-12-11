$(function () {

    // Paragraf etiketlerinin sonuna icerik ekleme
    $("p").click(function () {
        $("p").append(" I'm learning <b>append()</b> method!");
    });

    // Listeye eleman ekleme
    $("#addList").click(function () {
        var inputValue = $("#appendList").val();

        // Hicbir sey yazilmadiysa eklenmesin bos satir olarak listeye
        if (inputValue != '') {
            $("#list").append("<li>" + inputValue + "</li>");
            // Veri girildikten sonra da temizlensin input alani
            $("#appendList").val('');
        }
    });

    // Paragraf etiketlerinin basina icerik ekleme
    $("#btn-3").click(function () {
        $("p").prepend(" I'm learning <b>prepend()</b> method!");
    });

    // Liste etiketinden once div eklemek
    $("#btn-6").click(function () {
        $("#list").before("<div>Adding element before order list!</div>");
    });

    // Liste etiketinden sonra div eklemek
    $("#btn-7").click(function () {
        $("#list").after("<div>Adding element after order list!</div>");
    });

});

// Metin eklemek icin bir fonksiyon
function appendText() {
    var textOne;
    var appendBtn = $("#btn-5");
    var emptyP = $("#emptyP");

    textOne = "Button clicked first time! ";
    emptyP.append(textOne);
}

