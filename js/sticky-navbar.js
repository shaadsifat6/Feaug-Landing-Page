$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('black');
        $('section').addClass('add');
    }
    else{
        $('nav').removeClass('black');
        $('section').removeClass('add');
    }
})