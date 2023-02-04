import './carousel.css'

(function () {
    var carousel = document.getElementById('carousel_list');
    var left_btn = document.getElementById('left_btn');
    var right_btn = document.getElementById('right_btn');
    var banner = document.getElementById('banner');
    var circles = document.getElementById('circles')
    var circles_list = circles.getElementsByTagName('li')

    var clone_li = carousel.firstElementChild.cloneNode(true);
    carousel.appendChild(clone_li);

    var idx = 0;
    var lock = true;

    right_btn.onclick = right_btn_handle;
    function right_btn_handle() {
        if (!lock) {return}
        lock = false;

        idx++;
        carousel.style.transition = 'transform .5s ease 0s';
        carousel.style.transform = 'translateX('+ -16.66 * idx +'%)';
        if (idx == 5) {
            idx = 0;
            setTimeout(function() {
                carousel.style.transition = 'none';
                carousel.style.transform = 'none';
            }, 500);
        }

        setTimeout(function () {
            lock = true;
        }, 500);

        setCircle();
    }

    left_btn.onclick = function () {
        if (!lock) {return}
        lock = false;

        if (idx == 0) {
            idx = 4;
            carousel.style.transition = 'none';
            carousel.style.transform = 'translateX('+ -16.66 * ++idx +'%)';

            setTimeout(function () {
                carousel.style.transition = 'transform .5s ease 0s';
                carousel.style.transform = 'translateX('+ -16.66 * --idx +'%)';
            }, 0);
        } else {
            idx--;
            carousel.style.transition = 'transform .5s ease 0s';
            carousel.style.transform = 'translateX('+ -16.66 * idx +'%)';
        }

        setCircle();

        setTimeout(function () {
            lock = true;
        }, 500);
    }

    var timer;

    timer = setInterval(right_btn_handle, 2000);

    banner.onmouseenter = function () {
        clearInterval(timer);
    }

    banner.onmouseleave = function () {
        clearInterval(timer);
        timer = setInterval(right_btn_handle, 2000);
    }

    function setCircle() {
        for (var i=0; i<circles_list.length; i++) {
            if (idx == i) {
                circles_list[i].className = 'current';
            } else {
                circles_list[i].className = '';
            }
        }
    }

    circles.onclick = function(e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            idx = Number(e.target.getAttribute('data-n'));
            carousel.style.transition = 'transform .5s ease 0s';
            carousel.style.transform = 'translateX('+ -16.66 * idx +'%)';
        }

        setCircle();
    }
}())