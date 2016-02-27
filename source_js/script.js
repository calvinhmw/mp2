// Write any custom javascript functions here
var $root = $('html, body');


$(document).ready(function () {

    var newwidth = $(window).width();
    var newheight = $(window).height();
    $("#home").css({"height": newheight, "width": newwidth});

    $("section").css({"min-height": 0.8 * $(window).height()});
    $(".section-header").css({"min-height": 0.2 * $(window).height()});
    $("#contact").css({"min-height": 0.9 * $(window).height()});

    animate_carousel();
    smooth_scroll();
    navbar_effect_on_scroll();
});

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

        $curActive.one("animationend", function () {
            $curActive.removeClass("active go-left go-right");
        });
        $nextActive.one("animationend", function () {
            $nextActive.removeClass("right-arrive left-arrive");
        });
        return false;
    });
}


function smooth_scroll() {
    $("#nav-bar .nav-anchor").click(function (event) {
        var scrollTo = $(this).attr('id').split('-')[2];
        if(scrollTo == "education" || scrollTo == "projects" || scrollTo=="skills") {
            scrollTo = scrollTo+"-header";
        }
        //console.log(scrollTo);
        //$('html body')
        $root.animate({
            scrollTop: $('#' + scrollTo).offset().top
        }, 650);
        event.preventDefault();
    });
}



function navbar_effect_on_scroll() {
    $(window).scroll(function () {
        var curPos = $(document).scrollTop();
        var bannerPos = $('#intro-banner').offset().top;
        var homePos = $('#home').offset().top;
        var aboutPos = $('#about').offset().top;
        var eduPos = $('#education-header').offset().top;
        var projectsPos = $('#projects-header').offset().top;
        var skillsPos = $('#skills-header').offset().top;
        var contactPos = $('#contact').offset().top;
        //console.log('curpos: '+curPos);
        //console.log('home: '+ homePos);
        //console.log('about: '+ aboutPos);
        //console.log('edu: '+eduPos);
        //console.log('projects: '+projectsPos);
        //console.log('skills: '+skillsPos);

        if (curPos >= bannerPos) {
            $('#nav-bar').removeClass("navbar-invisible").addClass("navbar-visible");
        } else {
            $('#nav-bar').removeClass("navbar-visible").addClass("navbar-invisible");
        }

        if (curPos >= aboutPos) {
            //console.log('nav bar ready to resize!');
            $('#nav-bar').removeClass("navbar-normal").addClass("navbar-small");
            //$('#go-up-home').fadeIn(500, 'swing');
        } else {
            $('#nav-bar').removeClass("navbar-small").addClass("navbar-normal");
            //$('#go-up-home').fadeOut(500, 'swing');
        }


        if (curPos >= homePos - 1 && curPos < aboutPos - 1) {
            $('#scroll-to-home a').addClass('navbar-position-indicator');
        } else {
            $('#scroll-to-home a').removeClass('navbar-position-indicator');
        }

        if (curPos >= aboutPos - 1 && curPos < eduPos - 1) {
            $('#scroll-to-about a').addClass('navbar-position-indicator');
        } else {
            $('#scroll-to-about a').removeClass('navbar-position-indicator');
        }

        if (curPos >= eduPos - 1 && curPos < projectsPos - 1) {
            $('#scroll-to-education a').addClass('navbar-position-indicator');
        } else {
            $('#scroll-to-education a').removeClass('navbar-position-indicator');
        }

        if (curPos >= projectsPos - 1 && curPos < skillsPos - 1) {
            $('#scroll-to-projects a').addClass('navbar-position-indicator');
        } else {
            $('#scroll-to-projects a').removeClass('navbar-position-indicator');
        }

        if (curPos >= skillsPos - 1 && curPos < contactPos - 1) {
            $('#scroll-to-skills a').addClass('navbar-position-indicator');
        } else {
            $('#scroll-to-skills a').removeClass('navbar-position-indicator');
        }

        if (curPos >= contactPos - 1) {
            $('#scroll-to-contact a').addClass('navbar-position-indicator');
        } else {
            $('#scroll-to-contact a').removeClass('navbar-position-indicator');
        }

    });
}



$(window).load(function () {
    $("#cover-whole-page").hide();
});