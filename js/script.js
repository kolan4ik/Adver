$(document).ready(function(){
    var $window = $(window),
        flexslider;

    var tabContainers = $('.tabs > div');
    tabContainers.hide().filter(':first').show();
    $('.tab-menu a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('.tab-menu  li').removeClass('active');
        $(this).parent().addClass('active');
        return false;
    }).filter(':first').click();
    $('.flexslider2 button').click(function(){
            $(this).parent().css("height","auto")
            return false
        }
    );
    $('.flexslider2').flexslider({
        animation: "slide",
        animationLoop: false,
        slideshow: false,
        sync: ".flexslider",
        allowOneSlide:true,
        itemWidth: 750,
        minItems: 1,
        maxItems: 1,
        itemMargin: 5
    });
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        minItems: 3,
        maxItems: 3,
        asNavFor: '.flexslider2'
    });

    $('.prev-tab').on('click', function(){
        $('.flexslider2').flexslider('prev');
        $('.flexslider2 li').css("height","200");
        return false;
    });
    $('.next-tab').on('click', function(){
        $('.flexslider2').flexslider('next');
        $('.flexslider2 li').css("height","200");
        return false;
    });

});

