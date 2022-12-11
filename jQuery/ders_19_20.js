$(function () {

    // Paragraflari klonlayip body etiketinin en sonuna eklemek
    $("#cloneBtn").click(function () {
        // Hangi etiketin sonuna eklenecegini belirtmek icin appendTo(tag_name) kullanilir
        // append() ile ise yalnizca secili elemente icerik eklemesi yapiyorduk
        // Bu anlamda bu 2 etiket birbirinden oldukca farklidir
        $("p").clone().appendTo("body");
    });

    // Paragraflari kaldirmak (verileri ve event'leri tutulmaya devam eder)
    $("#detachBtn").click(function () {
        // Paragraf etiketleri secildi ve bu secilen elementler kaldirilacak
        $("p").detach();

        // Belirtilen bir elementin belli bir class'a sahip olup olmadigini kontrol etmek
        // Bootstrap buton sinifina sahipse
        if ($("#detachBtn").hasClass("btn")) {
            alert("This button has a bootstrap power!");
        }
    });

    // Secilen elementin offset koordinatlarini buldurma
    $("#example").click(function () {
        var offsetCoordinate = $("#example").offset();
        alert("Top: " + offsetCoordinate.top + " Left: " + offsetCoordinate.left);
    });

    // Secilen elementin ana ogeye gore koordinatlarini bulma
    $("#example-2").click(function () {
        var positionCoordinate = $("#example-2").position();
        alert("Top: " + positionCoordinate.top + " Left: " + positionCoordinate.left);
    });

    // Paragrafin rengini degistirme ve bu degisen rengi bastirma
    $("#example-3").click(function () {
        $("#example-3").prop("color", "red");
        $("#example-3").append($("#example-3").prop("color"));
    });

    // Paragrafin bootstrap ozelliklerini kaldirma
    $("#example-4").click(function () {
        // class attribute'u uzerinden boostrap ozellikleri kontrol edildiginden
        // bu attribute'u kaldirirsak bootstrap ozellikleri de kaldirilmis olur
        $("#example-4").removeAttr("class");
    });

    // Paragraflari h1 basligi olarak degistirme
    $("#replaceAllBtn").click(function () {
        $("<h1>This is a header!</h1>").replaceAll("p");
    });

    // Bir tarihin yaziminda araya "." yerine "/" yazdirilsin
    // ayrica formati da yil-ay-gun seklinde olsun -> ISO Standarti
    $("#changeDateFormat").click(function () {
        var date = $("#dateS").text();
        var formattedDate = "";

        if (date != '') {
            // "/" olarak degistirildi "." lar
            var dateElements = date.split(".");
            formattedDate = dateElements[2] + "/" + dateElements[1] + "/" + dateElements[0];

            // Son olarak yeni formatlanan ifade span uzerinde goruntulensin
            $("#dateS").text(formattedDate);
        }
    });
});

// Su anki tarihi doldurmaya yarayan fonksiyon
function printDate(id) {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();// Ayin kacinci gunu oldugu
    var currentMonth = currentDate.getMonth() + 1;// Yilin kacinci ayi oldugu
    var currentYear = currentDate.getFullYear();// Hangi yilda olundugu

    var formattedDate = currentDay + "." + currentMonth + "." + currentYear;

    var printElementId = "#" + id;
    var element = $(printElementId);

    // bircok defa eklenemesin diye yalnizca ici bosken append edilebilsin yapildi
    if (element.text() == '') {
        element.append("" + formattedDate);
    }
}
