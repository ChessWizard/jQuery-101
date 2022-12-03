$(function () {

    // Tikladigimiz DOM uyesiyle islem yapip yapmadigimizin kontrolu
    // yalnizca bu event icin durumlari kontrol etmek adina parametre olarak event geceriz
    $("h1, h2").click(function (event) {
        // Eger tikladigimiz mevcut element h1 veya h2 ise
        // this keywordu ile ulasiriz o anki secebildiklerimize -> h1 ve h2 secilebilir

        // secilen elementin tag tipi h1 ise bir alert cikartilsin
        if (event.currentTarget.tagName.toLowerCase() == "h1") {
            alert("Birincil duzeyde baslik etiketi secildi!");
        }

        // HTML'de tag isimleri buyuk harflerle tutulur.
        // bundan dolayi kucuk harfe cevirerek kontrolunu sagladim
        if (event.currentTarget.tagName.toLowerCase() == "h2") {
            alert("Ikincil duzeyde baslik etiketi secildi!");
        }
    });

    // Bir event isletilirken gelen veriye ulasmak

    // each() metoduyla tum p etiketleri geziliyor -> foreach loop mantigi
    // buradaki i parametresi hangi p'nin secildigine dair indis degeri tutar
    // 0. p, 1.p ... 
    $("p").each(function (i) {
        // Paragrafin kendisine tiklandiginda event parametresinin ulasabilecegi bir x property'si yaratildi
        // x:i denilerek de kullanilacak fonksiyon parametresi icin property yaratildi -> tekrar bak
        $(this).on("click", {x:i}, function (event) {
            // secilmis olan paragrafin index degeri ve kacinci paragrafin kacinci verisi oldugu alinir
            alert($(this).index()+1 + ". veri| " + (event.data.x + 1) + " paragraf");
        });
    });

    // custom bir event yazilip ona bir isim verdigimizde
    // verdigimiz isme ulasma
    // function icerisine parametre olarak event verdigimizde
    // ekledigimiz custom event icerisinde eventimizin property'lerine erisebilir duruma geliriz
    $("div").on("changeParagraphColors", function (event) {
        // Secilen paragrafin rengini degistir
        $(this).css("color", "red");
        // degistirme isleminden sonra buna sebep olan eventin ismini yazdir
        alert(event.namespace);
    })

    // custom eventleri trigger ile tetikleyerek aktiflestiririz
    // eventin ismini algilayabilmesi icin fonksiyona parametre olarak event burada da verilmelidir
    $("div").click(function (event) {
        // trigger edilecek eventin ismi yazilarak aktiflestirilir
        $(this).trigger("changeParagraphColors");
    });

    // Belgede bulundugumuz koordinatlari almak
    // Tum belge uzerinde mouse'u hareket ettirerek eszamanli olarak fare koordinatlarini gorelim
    // event ozelliklerini kullanabilmemiz icin fonksiyonumuza yine parametre olarak geciyoruz
    // bu event parametresi, bulundugumuz evente yani mousemove'a isaret eder
    $(document).mousemove(function (event) {
        $("#coordinates").text("x: " + event.pageX + " | " + "y: " + event.pageX);
    });

    // bulundugumuz eventin belirttigimiz event tipini etkisiz kilmak
    // link olarak youtube ise tiklanabilirligi devam etsin
    // twitch ise tiklanma ozelligi engellensin linkin
    $("a").click(function (event) {

        var currentLink = $(this).attr("href");

        // eger link twitch iceriyorsa tiklanamaz olsun, gidilemesin
        if (currentLink.includes("twitch")) {
            // anchor tag icin tiklanma eventi etkisiz hale getirildi
            event.preventDefault();
            alert("Enough twitch today! Spend some time outside!");
        }
    });

});
