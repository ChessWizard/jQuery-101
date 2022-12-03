$(function () {

    // hideBtn id'li butona tiklaninca paragraflar kaybolsun
    $("#hideBtn").click(function () {
        $("p").hide();
    });

    // showBtn id'li butona tiklaninca ise tekrar gorunur olsunlar
    $("#showBtn").click(function () {
        $("p").show();
    });

    // Yavasca gizleme ve gosterme
    $("#hideSlowlyBtn").click(function () {
        $(".exampleP").hide("slow");
    });

    $("#showSlowlyBtn").click(function () {
        $(".exampleP").show("slow");
    });

    // Hizlica gizleme ve gosterme
    $("#hideFastBtn").click(function () {
        $(".exampleP").hide("fast");
    });

    $("#showFastBtn").click(function () {
        $(".exampleP").show("fast");
    });

    // milisaniye cinsinden gizleme ve gosterme suresi ayarlama
    $("#hideSecondBtn").click(function () {
        // 3 saniye icerisinde gizleme islemi gerceklesecek
        $(".exampleP").hide(3000);
    });

    $("#showSecondBtn").click(function () {
        // 5 saniye icerisinde gosterme islemi gerceklesecek
        $(".exampleP").show(5000);
    });

    // Tek eventte acma ve kapama islemi -> toggle() metodu
    // Gosterme ve gizleme islemleri ayni event uzerinden yonetilebilir bu sayede
    $("#toggleBtn").click(function () {
        $(".exampleP").toggle();
    });

    // Youtube yorumlar kismi yapimi

    // Emoji picker implementasyonu
    //Sonrasinda buraya bak!
    //tinymce.init({
    //    selector: "#commentArea",
    //    onclick:"commentClick",
    //    plugins: "emoticons autoresize",
    //    toolbar: "emoticons",
    //    toolbar_location: "bottom",
    //    menubar: false,
    //    statusbar: false
    //});

    // Oncelikle basta gozukmemesi gereken div gizli isaretlenmeli
    var hidingElement = $(".hide");
    hidingElement.hide();
    var disabledElement = $("#doCommentBtn");
    // disabled property'si true olsun
    disabledElement.prop("disabled", true);

    // Ancak yorum yapmak icin tiklandiginda gorunur olacak bu div icerisindeki butonlar
    $("#commentArea").click(function () {
        hidingElement.show();

    });
    
    // Yazilma islemi sirasinda kontrol edilmesi gereken islemler
    // Yalnizca tuslara tiklandigindaki durum kontrol edilirse basarili sonuc alamayiz
    // Tusa basilip cekildigi durumlar icin bir kontrol yapilmalidir
    $("#commentArea").keyup(function() {

        // yorum yapma kismindaki deger aliniyor
        var text = $("#commentArea").val();
         // Eger herhangi bir sey yazilmamissa yorum yap butonu disable olmalidir
        if (text == '') {
            // disabled property'si true olsun
            disabledElement.prop("disabled", true);
        }
        else {
            // Eger text girildiyse disabled olmasin
            disabledElement.prop("disabled", false);
        }
    });

    // Eger iptal butonuna tiklanirsa satir tekrar gorunmez olsun
    $("#cancelBtn").click(function () {
        hidingElement.hide();
    });

    // Eger emoji butonuna tiklanirsa da bir emoji yazsin ekrana
    $("#emojiBtn").click(function () {
        // append metodu text ve html veriler eklemeye yarar element icerisine
        // emojiler de yalnizca html formatta hex tipinde gorunur olduklari icin bu metodu kullandim
        $("#commentArea").append("&#128536;");
    });

});
