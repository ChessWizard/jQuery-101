$(function () {

    // Traversing -> Filtering(filtreleme)
    // DOM elementleri arasinda belirli kosullara gore element cagirma

    // 1) div elementlerinden ilkini secmek
    $("#firstDiv").click(function () {
        $("div").first().css({
            "background-color": "brown",
            "color":"white"
        });
    });

    // 2) div elementlerinden sonuncusunu secmek
    $("#lastDiv").click(function () {
        $("div").last().css({
            "background-color": "black",
            "color": "white"
        });
    });

    // 3) 2. siradaki paragrafa indis araciligiyla eriselim -> NOT: indis + 1 = eleman sayisi
    $("#secondDiv").click(function(){
        $("div").eq(1).css({
            "background-color": "green",
            "color": "white"
        });
    });

    // 4) example class'ina sahip olan paragraflari gizle
    $("#hideDiv").click(function () {
        $("div").filter(".example").hide();
    });

    // 5) example class'ina sahip olmayan paragraflari gizle
    $("#hideNotDiv").click(function () {
        $("div").not(".example").hide();
    });
});
