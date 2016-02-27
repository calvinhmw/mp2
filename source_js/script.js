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
    $("section").css({"min-height": 0.8 * $(window).height()});
    $(".section-header").css({"min-height": 0.2 * $(window).height()});

    //$("#footer-home").css({"min-height": 0.15 * $(window).height()});

    animate_carousel();
    //animate_modal();
    //smooth_scroll();
    //navbar_effect_on_scroll();
});
//
//function animate_carousel() {
//    $(".carousel").slick({
//        dots: true,
//        speed: 300
//    });
//}


function animate_carousel() {
    var num_carousels = $(".carousel-content").length;
    for(var i=0; i<num_carousels; i++) {
        $("#carousel-"+i).removeClass('active');
    }

    $("#carousel-0").addClass('active');

    $(".carousel-arrow").click(function () {
        var $curActive = $(".carousel-content.active");

        if ($curActive.length == 0) {
            console.log("no carousel is active now");
            $("#carousel-0").addClass('active');
            $curActive = $(".carousel-0");
        }
        var curActiveIdx = parseInt($curActive.attr("id").split('-')[1]);
        var dir = $(this).attr("id").split('-')[1];
        var nextIdx = curActiveIdx;
        if (dir == "l") {
            nextIdx = curActiveIdx + 1;
        } else if (dir == "r") {
            nextIdx = curActiveIdx - 1;
        }
        nextIdx = nextIdx % num_carousels;
        if (nextIdx < 0) nextIdx = num_carousels - 1;

        var $nextActive = $("#carousel-" + nextIdx);
        $curActive.addClass(dir == "l" ? "go-left" : "go-right");
        $nextActive.addClass("active").addClass(dir == "l" ? "right-arrive" : "left-arrive");
        //console.log($curActive);
        //console.log($nextActive);

        $curActive.one("animationend", function () {
            $curActive.removeClass("active go-left go-right");
        });
        $nextActive.one("animationend", function () {
            $nextActive.removeClass("right-arrive left-arrive");
        });
        return false;
    });
}

$(window).load(function () {
    $("#cover-whole-page").hide();

    //$('#background-video, #nav-bar').removeClass('prevent-animation').addClass('animation-generic');
    //$("#banner-text-1 span:first-child").removeClass('prevent-animation').addClass('animation-hi');
    //$("#banner-text-1 span:nth-child(2)").removeClass('prevent-animation').addClass('animation-mingwei');
    //$('#banner-text-2').removeClass('prevent-animation').addClass('animation-welcome');
    //$('#go-down-about').removeClass('prevent-animation').addClass('animation-go-down-about');
});