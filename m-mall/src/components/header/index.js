import './header.css'

import Scroll from 'utils/scroll';

const CHANGE_CLASS_NAME = 'header-transition';
// let state = INIT_STATE;

class Header {
    constructor(el, criticalPoint, scrollContainer, eventEl=scrollContainer) {
        this.el = el;
        // this.scrollContainer = scrollContainer; // 滚动条所在容器
        // this.eventEl = eventEl; // 监听滚动事件元素

        new Scroll({
            criticalPoint: criticalPoint,
            change: ()=>{
                this.show();
            },
            reset: ()=>{
                this.hidden();
            }
        }, scrollContainer, eventEl);
    }

    show() {
        this.el.classList.add(CHANGE_CLASS_NAME);
    }

    hidden() {
        this.el.classList.remove(CHANGE_CLASS_NAME);
    }
}

export default Header;