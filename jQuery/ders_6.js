$(function () {

    // Yalnizca bir kereligine gerceklesecek "tiklama" eventi -> one()
    // Bir kere tiklandiktan sonra kac defa tiklanirsa tiklansin
    // click eventi icin yazilan fonksiyon bir daha aktif olmaz
    $("#p-1").one("click", function () {
        alert("This is an one-way ticket!");
    });

    // Animasyonlarda "tek seferlik bir uyarici" olarak kullanilabilir
    // 2000 milisaniye surecek animasyon
    $("#p-2").one("click", function () {
        $(this).animate({
            opacity: 0.25,
            height: "toggle"
        }, 2000);
    });

    // Mevcut yazilan bir fonksiyonu farkli yerlerde kullanabilme
    var person = {
        name: "Isa OZGUR",
        age: 21,
        print: function () {
            var personalVal = $("#p-3").text();
            var personalFull = personalVal + " " + "Name: " + this.name +" "+ "Age: " + this.age;
            $("#p-3").html(personalFull);// Son olarak birlestirilen icerik html icerigine yazilir
        }
    }

    // butona tiklanilinca object uzerinde yaratilan fonksiyon
    // $.proxy() metodu ile tetiklenir
    // $.proxy(fonksiyonu_kullanilacak_nesne, kullanilacak_fonksiyon)
    $("#btn-2").click($.proxy(person, "print"));

    // Pencere boyutunun browser tuslari ile degisimini takip etmek
    // her degisimde 1 artarak bu durumu gozlemleyelim
    var counter = 0;
    $(window).resize(function () {
        $("#counter").text(counter++);
    });

    // Pencerenin mevcut en ve boy degerlerini alma
    // Ekran boyutu degisirken dinamik olarak alinsin
    $(window).resize(function () {
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        $("#scrHeight").text("Heigth: " + screenHeight + " | ");
        $("#scrWidth").text("Width: " + screenWidth);
    });

    // Kaydirma islemi sirasinda olacaklari kontrol etme -> scroll()
    // denk gelen araba modeline gore resminin sag tarafinda goruntulenmesi

    // farkli bir zamanda gelistir
    //$("#scrollDiv").scroll(function () {
    //    // "/" ifadelerinden kesilsin ve 2. indisteki yani url'mize karsilik gelen alinsin
    //    var fullUrl = $("#carImages").attr("src").split("/");
    //    var imgUrl = fullUrl[2];

    //    // o da "." 'dan kesilsin ve 0. indislisi bizim resim ismimizi verir
    //    // hepsi .jpg formatta secildigi icin yalnizca isimleri uzerinden islem yapilabilir bu sayede
    //    var image = imgUrl.split(".")[0];

    //    // javascript enum yapisi
    //    var carEnum = {
    //        Ferrari = 0,
    //        Mercedes = 1,
    //        Scaglietti = 2
    //    };

    //    carEnum += 1;
    //    if (carEnum == 2) {
    //        carEnum = 0;
    //    }

    //    switch (carEnum) {
    //        case Ferrari:
    //            image = "ferrari";
    //            break;
    //        case Mercedes:
    //            image = "mercedes";
    //            break;
    //        case Scaglietti:
    //            image = "scaglietti";
    //            break;
    //    }
    //    var changedImg = fullUrl[0]+"/"+fullUrl[1]+"/"+ image + ".jpg";

    //    $("#carImages").fadeOut('fast', function () {
    //        $("#carImages").attr('src', changedImg);
    //        $("#carImages").fadeIn('fast');
    //    });

    //    // attribute degeri seet etmek
    //    // ör: attr("src",yeni_src_degeri);
    //    $("#carImages").attr("src", changedImg);

    //});

    // Form elementi submit edildiginde olacaklar(form sunucuya gonderildiginde) -> submit()

    // Secilen elemente ait eventleri kullanmak -> trigger()
    // istenilen bir durumda bir elementin eventi aktiflestirilir
    $("#selectedInput").select(function () {
        $("#inputInfo").text("Selected to Input!");
    });

    $("#selectBtn").click(function () {
        $("#selectedInput").trigger("select");
    });
});
