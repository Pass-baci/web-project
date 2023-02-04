import './backtop.css';
import 'icons/iconfont.css';

import Scroll from 'utils/scroll';

const CHANGE_CLASS_NAME = 'backtop-hidden';
// let state = INIT_STATE;

class Backtop {
    constructor(el, criticalPoint, scrollContainer, eventEl=scrollContainer) {
        this.el = el;
        // this.criticalPoint = criticalPoint;
        this.scrollContainer = scrollContainer; // 滚动条所在容器
        this.eventEl = eventEl; // 监听滚动事件元素
        new Scroll({
            criticalPoint: criticalPoint,
            change: ()=> {
                this.show();
            },
            reset: () => {
                this.hidden();
            }
        }, scrollContainer, eventEl);

        this.bindEvent();
    }

    bindEvent() {
        this.el.addEventListener('click', ()=>{
            this.scrollTo();
        }, false);
    }

    scrollTo(top=0,left=0) {
        this.scrollContainer.scrollTo(
            {
                top,
                left,
                behavior: 'smooth',
            }
        )
    }

    show() {
        this.el.classList.remove(CHANGE_CLASS_NAME);
    }

    hidden() {
        this.el.classList.add(CHANGE_CLASS_NAME);
    }
}

export default Backtop;