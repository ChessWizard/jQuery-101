$(function () {

    // text() metodu -> Yalnizca element icerisindeki metni alir veya degistirir
    // HTML elementlerini goruntulemez veya icerisine HTML elementi eklenemez

    // paragraf icerigi yalnizca metinsel olarak alindi
    var textParagraph = $("#p-1").text();
    alert(textParagraph);

    var span = $("#s-1");

    if (textParagraph.length > 20) {
        span.text("Long!");
    }

    else {
        span.text("Short!");
    }

    // html() metodu -> Ayni zamanda html elementlerini de alir ve degistirebilir
    var htmlParagraph = $("#p-1").html();
    alert(htmlParagraph);

    if (htmlParagraph.includes("<b>")) {
        span.text("It contains bold text!");
    }

    // val() metodu -> Form alanlarinda kullanilan HTML elementleri icerisindeki verilere ulasmak icin kullanilir

    // submit butonuna tiklandiginda
    $("button[type=submit]").click(function () {
        // Password alanindaki verileri alip alert olarak cikaran bir uygulama
        var password = $("input[type=password]").val();

        // Eger input icerisine bir veri girildiyse(bos degilse)
        if (password != '') {
            // Sifre verisi yazdirilsin
            alert("You can't hide! Your password is: " + " " + password);
        }
    });
    
        
});
