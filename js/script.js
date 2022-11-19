$(function(){

    // nav

    var nav = $('#header .nav')
    var dpeth2 = $('#header .nav .depth2')
    nav.hover(function(){
        dpeth2.stop().slideDown();
        $('#header .nav_bg').stop().slideDown();
    },function(){
        dpeth2.stop().slideUp();
        $('#header .nav_bg').stop().slideUp();
    })

    // slide

    // var slide = setInterval(function(){
    //     $('#slide .item:nth-child(1)').animate({
    //         'margin-top':'-300'+'px'},600,function(){
    //             $('#slide .itembox').append($('#slide item:nth-child(1)'))
    //             $('#slide .item:nth-child(3)').css('margin-top','0px')
    //         })
    // },2500)

    // var slide = setInterval(function(){
    //     $('#slide .item:nth-child(1)').animate({
    //         'margin-left':'-1200'+'px'},600,function(){
    //             $('#slide .itembox').append($('#slide .item:nth-child(1)'))
    //             $('#slide .item:nth-child(3)').css('margin-left','0px')
    //         })
    // },2500)

        var slide = setInterval(function(){
            $('#slide .item:nth-child(1)').fadeOut(1500).next().fadeIn(1500)
            $('#slide .itembox').append($('#slide .item:nth-child(1)'))
        },3000)

    // tab

    var anchor_on = $('#tab .tabTit a.on')
    var href_on = anchor_on.attr('href')
    $(href_on).show()
    var anchor = $('#tab .tabTit a')

    anchor.each(function(){
        var href = $(this).attr('href')
        $(this).click(function(){
            $('.tabList').hide();
            $(href).show()
            anchor.removeClass('on')
            $(this).addClass('on')
        })
    })

    // pop
    var popup = $('#pop')
    var btn = $('#pop button')
    
    $('#tab .tabList .click').click(function(){
        popup.fadeIn()
    })

    btn.click(function(){
        popup.fadeOut()
    })


})