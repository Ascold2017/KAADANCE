;"use strict";
$(document).ready(function(){
   // Пользовательские функции 
    $(" .gallery__photo").fancybox();
        var offset_left = function(val, area){

            var result = area.offset().left + area.width() - val;
            return result;
        }
        var offset_top= function(val, area){
            var result = area.offset().top - val;
            return result;
        }
        var area = $(".forms_main");
        var prize_area = $(".prize_container");
       var news_area =$(".news_container");
        $(window).resize(function(){
            $(".two_section__img").offset({ 
                top: offset_top(50, area),
                left: offset_left(150, area),
            });
            $(".prize_bg__img.left").offset({
                top:offset_top(-102, prize_area ),
                left: offset_left(prize_area.width()+130, prize_area )
            });
             $(".prize_bg__img.right").offset({
                top:offset_top(0, prize_area ),
                left: offset_left(600, prize_area )
            });
            (".news_bg__img.right").offset({
                top:offset_top(0, news_area),
                left: offset_left(news_area.width(), prize_area )
            });
        });
        $(".two_section__img").offset({ 
            top: offset_top(50, area),
            left: offset_left(150, area),
        });
        $(".prize_bg__img.left").offset({
            top:offset_top(-102, prize_area ),
            left: offset_left(prize_area.width()+130, prize_area )
        });
       $(".prize_bg__img.right").offset({
            top:offset_top(0, prize_area ),
            left: offset_left(600, prize_area )
        });
    
        (".news_bg__img.right").offset({
            top:offset_top(0, news_area),
            left: offset_left(news_area.width(), prize_area )
        });
        
});