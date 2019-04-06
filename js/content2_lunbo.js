$(function () {
    var num = 0;
    function banner() {
        $('.bgj li').eq(num).addClass('active5').siblings().removeClass('active5');
        $('.butj li').eq(num).css('background', 'orange').siblings().css('background', '');
    }
    function next() {
        num++;
        if (num > $('.butj li').length - 1) {
            num = 0;
        };
        banner();
    }
    $('.butj li').mouseover(function () {
        num = $(this).index();
        banner();
    })
    var time = setInterval(next, 1500);
    // 划上清除定时器 划出启动
    $('.boxj').hover(
        function () {
            clearInterval(time);
        },
        function () {
            time = setInterval(next, 1500);
        }
    );
})