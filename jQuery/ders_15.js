$(function () {

    // anchor tagimdeki baglanti degerini almak
    $("#showBtn").click(function () {
        // Bu yalnizca get islemidir
        var myLink = $("#myLink").attr("href");
        var myAccount = myLink.split("/")[3];// ChessWizard'a karsilik gelir

        alert("My Github Account -> " + myAccount);
    });

    // HTML Elementlerinin icerigini degistirme (Set islemleri)
    // text() / html() / val() / attr() metotlari

    // text() ile paragraf icerigi degistirme
    $("#p-1").click(function () {
        $("#p-1").text("Inside First Paragraph").css("color","red");
    });

    //html() ile paragraf icerigi degistirme
    // set ederken html etiketlerini calisir halde verir, text halinde degil
    $("#p-2").click(function () {
        $("#p-2").html("<b>You are in the second paragraph!</b>");
    });

    //val() ile input icerigi degistirme
    $("#input-1").click(function () {
        $("#input-1").val("You are in the input area!");
    });

    // val() ile araya nokta koymak
    // bir onceki veriyi koruyarak ekleme islemi icin
    // inputTwo.val(inputTwo.val() + "eklenecek_deger"); yontemi kullanilir
    // yeni_hali(eski + eklenecek);
    $("#input-2").keypress(function () {

        var inputTwo = $("#input-2");
        if (inputTwo.val() != '') {
            inputTwo.val(inputTwo.val() + ".");
        }
    });

    // attr() ile paragrafýn title degerini degistirmek
    $("#p-3").click(function () {
        // Chaining islemi metotlarin sirasiyla islendigi coklu bir islemdir
        // Bu sayede once title degeri degistirilip ardindan degistirilen hali alinabilir
        var changedTitle = $("#p-3").attr("title", "Ucuncu Paragraf!").attr("title");
        alert(changedTitle);
    });

    // Bu metotlar icin Callback Fonksiyonlari
    // html() ile veri alindiktan sonra index ve eski degeri alinmasi
    $("#p-4").click(function () {
        $("#p-4").html(function (index, oldText) {
            // Index olarak secilenler arasindan kacinci oldugu yazdirilir
            // 1 tane secildigi icin 0. index'e denk gelir!
            return "Old Text: " + oldText + " New Text: <b>This a New!!</b> -> " + (index + 1) + ". paragraph!";
        });
    });


    // Coklu attribute degeri degistirmek
    // NOT: anim() metodunda oldugu gibi coklu degisimde {} arasÝnda : ile belirtilerek degerler verilir
    $("#p-5").click(function () {
        $("#p-5").attr({
            title: "Besinci Paragraf!",
            style: "color:red;"
        });
        alert($("#p-5").attr("title"));
    });
});
