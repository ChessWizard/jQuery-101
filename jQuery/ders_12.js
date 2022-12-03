$(function () {

    // Slide efektleri -> Kaydirma efekti ile animasyonlar

    // Asagi yonlu kayma haraketi
    $("#slideDownBtn").click(function () {
        $("#div1").slideDown(2000);
    });

    // Yukari yonlu kayma hareketi
    $("#slideUpBtn").click(function () {
        $("#div1").slideUp("slow");
    });

    // Hem yukari hem asagi yonlu kayma hareketi
    $("#slideToggleBtn").click(function () {
        $("#div2").slideToggle("slow");
    });

    // Tablo satirlarinin asagi yonlu kayarak tek tek acilmasi
    // tekrar bak!
    $("#slideTableBtn").click(function () {
        $("#row1").slideDown("slow");
        $("#row2").slideDown("slow");
        $("#row3").slideDown("slow");
        $("#row4").slideDown("slow");
    });

    // Animate kullanimi -> Belirli ozellikler vererek animasyonlar olusturma

    // Soldan saga 250px kayacak sekilde animasyon olusturma
    $("#animateBtn").click(function () {
        $("#animatedDiv1").animate({
            left: '250px',
            opacity: '0.6',
            height: '200px',
            width:'200px'
        }, 500);

    });
});