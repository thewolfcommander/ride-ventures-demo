$(document).ready(function () {

    // variables
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    const cars = ['../images/animation/Img_05.png', '../images/animation/Img_06.png'];


    // keypress event
    $(window).load(function (e) {
        $($surface).toggleClass('moveRight');
        $($car).toggleClass('suspension');
    })

    // lights
    $(window).load(function (e) {
        if (e.which == 119) {
            if (flag) {
                flag = false;
                $img.attr('src', cars[0]);
            } else {
                flag = true;
                $img.attr('src', cars[1]);
            }
        }
    })


});