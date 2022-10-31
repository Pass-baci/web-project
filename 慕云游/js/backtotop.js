(function () {
    var back_top = document.getElementById('backTop');

    var timer;
    back_top.onclick = function () {
        clearInterval(timer);
        timer = setInterval(function () {
            document.documentElement.scrollTop -= 100;
        }, 20);
    }

    window.onscroll = function () {
        var scroll_top = window.scrollY || document.documentElement.scrollTop;
        if (scroll_top == 0) {
            clearInterval(timer);
            back_top.style.display = 'none';
        } else {
            back_top.style.display = 'block';
        }
    }
}())