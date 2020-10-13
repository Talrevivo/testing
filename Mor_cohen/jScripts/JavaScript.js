$(document).ready(function () {
    $(window).scroll(function () {
        $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
    });

    $(window).on("load", function () {
        $(window).scroll(function () {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();
            $(".fade").each(function () {
                /* Check the location of each desired element */
                var objectBottom = $(this).offset().top + $(this).outerHeight();

                /* If the element is completely within bounds of the window, fade it in */
                if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                    if ($(this).css("opacity") == 0) { $(this).fadeTo(500, 1); }
                } else { //object goes out of view (scrolling up)
                    if ($(this).css("opacity") == 1) { $(this).fadeTo(500, 0); }
                }
            });
        }).scroll(); //invoke scroll-handler on page-load
    });

    $("#menu-img").click(function () {
        $("#menu-img").hide();
        $(".nB").show();
        $("#x").show();
        $(".nB").addClass("navclick-design");
    });

    $("#x").click(function () {
        $("#menu-img").show();
        $(".nB").hide();
        $(".nB").addClass("navclick-design");
        location.reload();
    });

});
