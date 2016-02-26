// Write any custom javascript functions here




$(document).ready(function () {

    var newwidth = $(window).width();
    var newheight = $(window).height();
    $("#home").css({"height": newheight, "width": newwidth});

    //var videoheight = $("#background-video").height();
    //var videowidth = $("#background-video").width();
    //var homewidth = $("#home").width();
    //var homeheight = $("#home").height();
    //console.log("home height: "+homeheight);
    //console.log("home width: "+homewidth);
    //console.log("video width: "+videowidth);
    //console.log("video height: "+videoheight);


    //var homeAsRatio = homewidth / homeheight;

    //if (videoAsRatio > homeAsRatio) {
    //    $("#background-video").css({"height": homeheight});
    //} else {
    //    $("#background-video").css({"width": homewidth});
    //}
    $("section").css({"min-height": 0.9 * $(window).height()});

    //$("#footer-home").css({"min-height": 0.15 * $(window).height()});

    //animate_carousel();
    //animate_modal();
    //smooth_scroll();
    //navbar_effect_on_scroll();
});




$(window).load(function () {
    $("#cover-whole-page").hide();

    //$('#background-video, #nav-bar').removeClass('prevent-animation').addClass('animation-generic');
    //$("#banner-text-1 span:first-child").removeClass('prevent-animation').addClass('animation-hi');
    //$("#banner-text-1 span:nth-child(2)").removeClass('prevent-animation').addClass('animation-mingwei');
    //$('#banner-text-2').removeClass('prevent-animation').addClass('animation-welcome');
    //$('#go-down-about').removeClass('prevent-animation').addClass('animation-go-down-about');
});