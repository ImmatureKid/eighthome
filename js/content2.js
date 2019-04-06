window.onload = function () {

    var fullpage = document.getElementById('fullpage');
    var pages = fullpage.getElementsByClassName('page');
    var navi = document.getElementsByClassName('head-tap-list')[0];
    var spans = navi.getElementsByTagName('a');

    // 添加鼠标滚动事件
    fullpage.addEventListener("mousewheel", fn1, false);
    fullpage.addEventListener("DOMMouseScroll", fn1, false);

    //定义变量num，指定屏的序号，取值范围（0-3）
    var num = 0;

    function fn1(evt) {
        var event = evt || window.event;
        var point = true;//向下滚动为true，向上滚动为false
        if (event.wheelDelta) {//IE 或 谷歌
            point = event.wheelDelta > 0 ? false : true;
        } else {//火狐
            point = event.detail > 0 ? true : false;
        }
        // 去除滚动的默认事件
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
        if (point) {
            num++;
        } else {
            num--;
        }
        if (num < 0) {
            num = 0;
        }
        if (num > 7) {
            num = 7;
        }
        play(num);
    }
    function play(n) {
        fullpage.style.top = -(n * 100) + '%';
        for (var i = 0; i < spans.length; i++) {
            // 去掉所有切换按钮的的class属性值
            spans[i].className = "header-tap-item";

        }
        // 当前切换按钮的样式为‘active2’
        spans[n].className = "active2";
        // 将‘active’样式追加到当前page元素的class属性中
    }
    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick = function () {
            for (var j = 0; j < spans.length; j++) {
                if (this == spans[j]) {
                    num = j;
                    play(num);
                }
            }
        }
    }

}