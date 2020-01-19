$(document).ready(function () {
    var carousel = $(".example-carousel").waterwheelCarousel({
        flankingItems: 3,
        movingToCenter: function ($item) {
        $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
        },
        movedToCenter: function ($item) {
        $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
        },
        movingFromCenter: function ($item) {
        $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
        },
        movedFromCenter: function ($item) {
        $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
        },
        clickedCenter: function ($item) {
        $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
        },
        opacityMultiplier: 1,
        separation: 190,
        horizonOffset: 0,
        sizeMultiplier: 0.9
    });



    $('#prev').bind('click', function () {
        carousel.prev();
        return false
    });

    $('#next').bind('click', function () {
        carousel.next();
        return false;
    });

    $('#reload').bind('click', function () {
        newOptions = eval("(" + $('#newoptions').val() + ")");
        carousel.reload(newOptions);
        return false;
    });

    });