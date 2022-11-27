$(function () {

    // hover() -> hem mouseenter hem de mouseleave iceren event
    // hover(ustune gelindiginde calisacak fonksiyon, ustunden gidildiginde calisacak fonksiyon)
    $("#hoveredParagraph").hover(function () {
        // ustune gelindiginde paragraf yazi rengi yesil olsun
        $(this).css("color", "green");
    }, function () {
        // ustunden gidildiginde yazinin rengi kirmizi olsun
        $(this).css("color", "red");
    });

    // focusin() -> elemente veya icerisindeki bir elemente girildiginde calisir
    // focusout() -> " " ... cikildiginda calisir
    $("#focusDiv").focusin(function () {
        $(this).css("background-color", "blue");
    });

    $("#focusDiv").focusout(function () {
        $(this).css("background-color", "darkred");
    });

});
