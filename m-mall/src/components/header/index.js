import './header.css'

const CHANGE_CLASS_NAME = 'header-transition';
const INIT_STATE = 'init';
const CHANGE_STATE = 'changed';
// let state = INIT_STATE;

class Header {
    constructor(el, criticalPoint, scrollContainer, eventEl=scrollContainer) {
        this.el = el;
        this.criticalPoint = criticalPoint;
        this.scrollContainer = scrollContainer; // 滚动条所在容器
        this.eventEl = eventEl; // 监听滚动事件元素

        this.setState(INIT_STATE);

        this.bindEvent();
    }

    // 设置初始状态
    setState(state) {
        this.state = state;
    }

    bindEvent() {
        this.scrollContainer.addEventListener('scroll', ()=> {
            if (this.isChange()) {
                this.setState(CHANGE_STATE);
                this.changeStyle();
            }
            if (this.isReset()) {
                this.setState(INIT_STATE);
                this.resetStyle();
            }
        }, false)
    }

    isChange() {
        return this.state !== CHANGE_STATE && this.scrollContainer.scrollTop > this.criticalPoint
    }

    isReset() {
        return this.state !== INIT_STATE && this.scrollContainer.scrollTop <= this.criticalPoint
    }

    changeStyle() {
        this.el.classList.add(CHANGE_CLASS_NAME);
    }

    resetStyle() {
        this.el.classList.remove(CHANGE_CLASS_NAME);
    }
}

export default Header;