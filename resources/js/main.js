//mixit up plugin

var mixer = mixitup('.portfolio-grid-container');

//scrollyfy

$(function(){
    $('.nav a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false
    });
});