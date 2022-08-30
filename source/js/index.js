// go to top on screen button function display or hide
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() < 50) {
            $("#goToTop").addClass("visually-hidden");
        } else {
            $("#goToTop").removeClass("visually-hidden");
        }
    });
});

