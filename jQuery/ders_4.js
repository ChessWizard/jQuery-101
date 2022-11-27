$(function () {
   
    // butona tiklaninca tabloya satir ve veri eklemek
    var text = "new data";
    $("#addRow").click(function () {
        $("#eventTable").append("<tr><td>" + text + "</td>" + "<td>" + text + "</td>" + "<td>" + text + "</td>" + "<td>" + text + "</td></tr>");
    });

    // Iki kere tiklaninca secilen p'nin yazi rengi kirmizi olsun
    $("p").dblclick(function () {
        $(this).css("color", "red");
    });

    // mouse imlecimiz ile paragrafýn alanýna girince olacak islemler
    // kapladigi alanin uzerine geldigimiz anda fonksiyon tetiklenir
    $("#text-7").mouseenter(function () {
        //alert("You entered p area");
    });

    // div uzerine gelinip sonrasinda uzaklasildiginda
    // neden beni býraktýn,artýk geri dünþü yok! yazýlsýn
    $("#hi").mouseleave(function () {
        $(this).html("Why did you leave me, there is no going back now!");
    });

    // mouse butonlarindan hangisine basilirsa basilsin asagidaki olay gerceklesir
    // sag/sol/orta fark etmez. click ozelliginde ise yalnizca sol buton isler!
    $("#alertBtn").mousedown(function () {
        alert("Alert!!!");
    });

    // mouse'a tiklayip elimizi cektikten sonra olusacak islemler
    $("#alertBtn2").mouseup(function () {
        alert("Alert Up!");
    });

    // Uzerine gelindiginde paragrafi 180 derece cevirsin
    // mouseenter + mouseleave -> hover()
    // hover(girildiginde yapilacak islem, cikildiginda yapilacak islem)
    $("#hover").hover(function () {
        $(this).css({ 'transform': 'rotate(' + 180 + 'deg)' });// 180 derece donsun
    }, function () {
        $(this).css({ 'transform': 'rotate(' + 0 + 'deg)' });// eski haline geri gelsin
    });

    // input icerisine girildiginde ve icinde kalindiginda(focus)
    // arka plan rengi degissin
    $(".input").focus(function () {
        $(this).css("background-color", "#cccccc");
    });

    // eger bir yerden cikip farkli yere focus atilirsa
    // onceki focuslanan yer uzerindeki deisimler bu metot ile yapilir -> blur
    $(".input").blur(function () {
        $(this).css("background-color", "red");
    });

    // eger bir tusa tiklanirsa input icerinde
    $(".input").keydown(function () {
        $(this).css("background-color", "green");
    });

    // eger tustan el cekilirse
    $(".input").keyup(function () {
        $(this).css("background-color", "yellow");
    });

    // eger yazma durumu devam ederken islenecek durumlara ihtiyacimiz varsa
    // ornegin her yazma durumunda bir islem yapilacaksa/kontrol edilecekse
    // ör: her yazilan 3 karakteri "." 'ya ceviren uygulama

    debugger;
    // input icerisine girilen verinin uzunlugu alindi
    var textLen = $("#txt").val().length;
    var dotCounter = "";
    $("#txt").keypress(function () {
        if (textLen % 3 == 0) {
            dotCounter += ".";
            $("#txt").html(dotCounter);
        }
    });
    
    // coklu event islemleri -> on() metodu

});
