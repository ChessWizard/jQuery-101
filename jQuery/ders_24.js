$(function () {

    // 1) Liste elemanlarini sirasiyla alert olarak yazdirmak
    $("#clickBtn").click(function () {
        // firstList id'sine sahip ul altindaki li'ler donguyle donulur 
        $("ul#firstList li").each(function (i) {
            alert((i+1) + ". paragraf icerigi: " + $(this).text());
        });
    });

    // 2) Birden fazla elementi bulup uzerlerinde islemler yapmak
    // Filtrelemeler arasina end() koyarsak ancak coklu filtreleme yapabiliriz
    // find() ile bir elementi bulup filtreledik secmimizi ve uzerinde css islemi yaptik
    $("#clickBtn-2").click(function () {
        $("ul#secondList").find(".secondLi").css("background-color", "red").end()
            .find(".thirdLi").css("color", "red");
    });

    // 3) Icinde span etiketi bulunan p'leri bul ve arka planini kahverengi yap
    $("#clickBtn-3").click(function () {
        $("p").has("span").css({
            "background-color": "brown",
            "color":"white"
        });
    });

    // 4) Eger ul listemin parent'i bir div ise
    // bu div'in title'ini alert olarak yazdir
    $("#clickBtn-4").click(function () {

        if ($("ul#firstList").parent().is("div")) {
            var parentTitle = $("ul#firstList").parent().attr("title");
            alert("Parent Title: " + parentTitle);
        }

    });

    // 5) Belirtilen indisten itibaren geri kalan tum li'leri dondurme -> slice() metodu
    $("#clickBtn-5").click(function () {
        // [2. indis elemani, 6. indis elemani) tanimiyla alinir veriler
        $("ul#thirdList li").slice(2,6).css({
            "background-color": "brown",
            "color":"white"
        });
    });
});
