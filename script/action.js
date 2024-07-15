$('.tabmenu a').eq(0).click(function () {
    $('.tabmenu a').eq(0).addClass('on')
    $('.tabmenu a').eq(1).removeClass('on')
    $('.text_box').show();
    $('.link_box').hide();
    return false;
})
$('.tabmenu a').eq(1).click(function () {
    $('.tabmenu a').eq(1).addClass('on')
    $('.tabmenu a').eq(0).removeClass('on')
    $('.text_box').hide();
    $('.link_box').show();
    return false;
})