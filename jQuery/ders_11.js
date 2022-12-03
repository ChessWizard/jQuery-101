$(function () {
    //fadeIn animasyonlari -> opacity degeri uzerinden gorunurluk efekti hazirlar
    $("#fadeInBtn").click(function () {
        $("#fadeInDiv1").fadeIn();
    });

    $("#fadeInSlowBtn").click(function () {
        $("#fadeInDiv2").fadeIn("slow");
    });

    $("#fadeInSecondsBtn").click(function () {
        $("#fadeInDiv3").fadeIn(4000);
    });

    //fadeOut animasyonlari -> opacity degeri uzerinden kaybolma efekti hazirlar
    $("#fadeOutBtn").click(function () {
        $("#fadeInDiv1").fadeOut();
    });

    $("#fadeOutSlowBtn").click(function () {
        $("#fadeInDiv2").fadeOut("slow");
    });

    $("#fadeOutSecondsBtn").click(function () {
        $("#fadeInDiv3").fadeOut(4000);
    });

    // fadeToogle() animasyonlari -> acikken kapatir, kapaliyken acar animasyon ile
    $("#fadeToogleBtn").click(function () {
        // callback -> bir islemin sonunda farkli bir islem yapilacagi zaman yapilacak islem
        $("#fadeInDiv3").fadeToggle(function () {
            $(this).css("color", "red");
        });
    });

    // fadeTo() animasyonlari -> opacity degerinin 0-1 arasi bir degere sahip olmasini saglar
    $("#fadeToBtn").click(function () {
        // 2.5 saniye sureyle elementin gorunumu 0.3 opacity'ye duser
        $("#fadeInDiv2").fadeTo(2500, 0.3);
    });

});
