$(function () {

    // Traversing islemleri -> DOM Tree'de gezinme, elemanlar arasi gecisler

    // 1) span'lerin bir ust elementine(parent'ina) git ve css'ini degistir -> parent() metodu
    // NOT: coklu ozellik girileceginde {} arasina ve property:value seklinde ekleriz
    $("#showSpanParent").click(function () {
        $("span").parent().css({
            "color": "red",
            "border": "2px solid red",
            "font-size": "32px"
        });
    });

    // 2) span'lerin ustundeki tum parent'lara etki edilsin -> parents() metodu
    $("#showSpanAllParents").click(function () {
        $("span").parents().css({
            "color": "red",
            "border": "2px solid blue",
            "font-size": "32px"
        });
    });

    // 3) span'lerin yalnizca sectigimiz parent'ina belirtilen css'i uygulama
    $("#showSpanUlParent").click(function () {
        $("span").parents("ul").css({
            "color": "red",
            "border": "2px solid blue",
            "font-size": "32px"
        });
    });

    // 4) span ile div arasinda kalan tum parent'lara css'i uygulama
    $("#showBetweenSpanDiv").click(function () {
        $("span").parentsUntil("div").css({
            "color": "red",
            "border": "2px solid #A52A2A",
            "font-size": "32px"
        });
    });

    // 5) div'in hemen altindaki elementlere css'i uygulama
    $("#showDivsChild").click(function () {
        // descendents class'ina sahip div'lerin ilk child'ina ulas
        $("div.descendents").children().css({
            "color": "red",
            "border": "2px solid #A52A2A",
            "font-size": "32px"
        });
    });

    // 6) div'in altindaki span elementine css'i uygulama
    $("#showDivsSpan").click(function () {
        // descendents class'ina sahip div'lerin ilk child'ina ulas
        $("div.descendents").find("span").css({
            "color": "red",
            "border": "2px solid #D2691E",
            "font-size": "32px"
        });
    });

    // 7) div'in altindaki tum child'lari gosterme
    $("#showDivsAllChilds").click(function () {
        // descendents class'ina sahip div'lerin tum alt child'larina css'i uygulama
        $("div.descendents").find("*").css({
            "color": "red",
            "border": "2px solid #D2691E",
            "font-size": "32px"
        });
    });

});
