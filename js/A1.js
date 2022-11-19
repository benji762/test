$(function(){

    /* 네비게이션 오버 */
    var gnb = $('#header .nav .gnb')
    var depth2 = $('#header .nav .depth2')

    gnb.hover(function(){
        depth2.stop().slideDown();
    },function(){
        depth2.stop().slideUp();
    })

    /* 메인슬라이드 상하 */
      var slide =  setInterval(function(){
        $('#slide .container > p:nth-child(1)').animate({
            'margin-top':'-300'+'px'},600,function(){
                $('#slide .container').append( $('#slide .container > p:nth-child(1)'));
             $('#slide .container > p:nth-child(3)').css('margin-top','0px');
        });
    },2500)

    /* 탭메뉴 */
        var anchor_on = $('.tab a.on')
        var href_on = anchor_on.attr('href')
        $(href_on).show()
        var anchor = $('.tab a')
        var panel = $('.tab_list .panel')

        anchor.each(function(){
            var href = $(this).attr('href')
            $(this).click(function(){
                panel.hide()
                $(href).show()
            })
        })

        /* 팝업 */
        $('.panel li a').each(function(){
            $(this).click(function(){
                $('#pop-wr').show()
            })
        })

    $('.pop button').click(function(){
        $('#pop-wr').fadeOut()
    })
})
