(function() {
    var banner_nav_box = document.getElementById('banner-nav-ul');
    var banner_nav = document.getElementById('banner-nav');
    var menu_box = document.getElementById('menu');
    var menus = document.querySelectorAll('#menu .menu');
    var banner_nav_list = document.querySelectorAll('#banner-nav-ul li');
    // var banner_nav_li = banner_nav_list.getElementsByTagName('li');
    banner_nav_box.onmouseover = function (e) {
        if (e.target.tagName.toLowerCase() == 'li') {
            var dataT = e.target.getAttribute('data-t');
            var menu = menu_box.querySelector('.banner .menu-box [data-t='+ dataT +']')
            setClassDefault();
            e.target.className = dataT+' curr';
            menu.className = 'menu curr';
        }
    }

    banner_nav.onmouseleave = function () {
        setClassDefault();
    }

    function setClassDefault() {
        for (var i=0;i<banner_nav_list.length;i++) {
            banner_nav_list[i].className = banner_nav_list[i].getAttribute('data-t');
        }

        for (var i=0;i<menus.length;i++) {
            menus[i].className = 'menu';
        }
    }
}())