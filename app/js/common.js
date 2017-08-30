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
        var first = $(".question_item").eq(0);
        first.addClass("active");
        
        var first_text = first.find(".question__text").text();
        console.log(first_text);
        var first_title = first.find(".question__title").text();
        $(".question_right .question__text").text(first_text);
        $(".question_right .question_title__text").text(first_title);
        
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
    //Timer
 $(function(){
     
     function getTimeRemaining(endtime){
          var t = Date.parse(endtime) - Date.parse(new Date());
       
          var seconds = Math.floor( (t/1000) % 60 );
          var minutes = Math.floor( (t/1000/60) % 60 );
          var hours = Math.floor( (t/(1000*60*60)) % 24 );
          var days = Math.floor( t/(1000*60*60*24) );
          return {
           'total': t,
           'days': days,
           'hours': hours,
           'minutes': minutes,
           'seconds': seconds
          };
    }
    
     var days = $(".forms_bottom__circle.days");
     var hours = $(".forms_bottom__circle.hours");
     var minutes = $(".forms_bottom__circle.minutes");
     var seconds = $(".forms_bottom__circle.seconds");
     
     function initializeClock(){
           var timeinterval = setInterval(function(){
           var endtime = $(".time").text();
           var t = getTimeRemaining(endtime);
           days.text(t.days);
           hours.text(t.hours);
           minutes.text(t.minutes);
           seconds.text(t.seconds);
           if(t.total<=0){
            clearInterval(timeinterval);
           }
          },1000);
        }
     initializeClock();
 });
    
});