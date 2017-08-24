;"use strict";
$(document).ready(function(){
   // Пользовательские функции 
    $(" .gallery__photo").fancybox({
                 
                   allowfullscreen: 'true'
                });
   
       $(".header__menu").slicknav({
           label: "",
       });
    //Accordeon
    $(function(){
        $(".question_item").on('click', function(e){
             if ($(window).width() >= '630'){
                 e.preventDefault();
             }
            var text = $(this).find(".question__text").text();
            var title = $(this).find(".question__title").text();
            $(".question_right .question__text").text(text);
            $(".question_right .question_title__text").text(title);
            $(this).slideUp().siblings().slideDown();
        })
    });
    //Moving button in header
    $(function(){
        if ($(window).width() <= '630'){
            $('.header_main__left>.header__button').appendTo( $('.header_main__right') );
           }
            var first = true;
            window.onresize = function(){
                if (($(document).width() <= '630')&(first)){
                    $('.header_main__left>.header__button').appendTo( $('.header_main__right') );
                    first = false;
                   }
                else{
                    if((!first)&($(document).width() > '630')){
                         $('.header_main__right>.header__button').appendTo( $('.header_main__left') );
                        first = true;
                    }
                }
            }
    });
    

});