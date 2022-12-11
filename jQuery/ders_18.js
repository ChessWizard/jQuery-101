$(function () {

    // Elementlerimizin yukseklik ve genisliklerini almak 

    // 1) Sadece gercek genislik ve yuksekligin alinmasi
    // Border'dan ve paddingden dolayi tam olarak 350 degil 305.2 buluruz
    // border 4.8px, padding'ler ise 20+20(sagdan ve soldan iceri ayni sekilde yukaridan ve asagidan) 
    // den = 40 yani 350 - 44.8 den 305.2'dir gercek degerlerimiz
    $("#calculateBtn").click(function () {
        var changedDiv = $("#changedDiv");

        var txt = "";
        txt += "Width: <b>" + changedDiv.width() + "</b> | Height: <b>" + changedDiv.height()+"</b>";
        $("#exactDimensions").html(txt);
    });

    // 2) padding verisi dahil genislik dondurme
    // padding'ler dahil edilince 40 eklenir ve = 345.2 olur aldigimiz degerler
    $("#calculateBtn2").click(function () {
        var changedDiv = $("#changedDiv");

        var txt = "";
        txt += "Width and Padding: <b>" + changedDiv.innerWidth() + "</b> | Height and Padding: <b>" + changedDiv.innerHeight() + "</b>";
        $("#innerDimensions").html(txt);
    });

    // 3) padding ve border verisi dahil genislik dondurme (elementin tamaminin var olan degeri)
    $("#calculateBtn3").click(function () {
        var changedDiv = $("#changedDiv");

        var txt = "";
        txt += "Width, Padding and Border: <b>" + changedDiv.outerWidth() + "</b> | Height, Padding and Border: <b>" + changedDiv.outerHeight() + "</b>";
        $("#outerDimensions").html(txt);
    });

    // 4) padding, border ve varsa margin verisi dahil genislik dondurme (elementler arasi uzaklik dahil)
    // margin-top:20px; ekledigim icin div'e, height ozelligi 350 + 20 = 370 bulunur
    $("#calculateBtn4").click(function () {
        var changedDiv = $("#changedDiv");

        var txt = "";
        txt += "Width, Padding and Border: <b>" + changedDiv.outerWidth(true) + "</b> | Height, Padding and Border: <b>" + changedDiv.outerHeight(true) + "</b>";
        $("#outerTrueDimensions").html(txt);
    });
});
