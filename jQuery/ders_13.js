$(function () {

    // Kayma efekti baslasin div icin
    $("#startAnimBtn").click(function () {
        $("#slidingDiv").slideDown(3000);
    });

    // durdurma butonuna tiklaninca da animasyon dursun nerede kaldiysa
    $("#stopAnimBtn").click(function () {
        $("#slidingDiv").stop();
    });

    // bir efekt bittikten sonra bir sey olmasini istersek
    // callback yapisini kullaniriz
    $("#hideBtn").click(function () {
        // Gizlenme islemi bittikten sonra slide hareketiyle tekrar acilsin
        $("#slidingDiv").hide(2000, function () {
            $("#slidingDiv").slideDown(2000);
        });
    });

    // Chaining -> Tek bir oge uzerinde ayni anda birden fazla jquery metodunun calistirilabilmesi
    $("#changeMultipleBtn").click(function(){
        $("#multipleDiv").slideUp(2000).slideDown(2000, function () {
            // Eger animasyonlar bittikten sonra callback ile belirtilmezse asagidakiler
            // daha animasyonlar baslarken gerceklesirlerdi
            $("#multipleDiv").css("background-color", "aquamarine").text("Chaining Over!");
        });
    });

});
