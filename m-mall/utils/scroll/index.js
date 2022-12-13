import { INIT_STATE, CHANGE_STATE} from "./constants";
import {DEFAULTS} from "./default";

// let state = INIT_STATE;

class Scroll {
    constructor(options, criticalPoint, scrollContainer, eventEl=scrollContainer) {
        this.options = Object.assign({},DEFAULTS, options);
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
        const {change, reset} = this.options;
        this.scrollContainer.addEventListener('scroll', ()=> {
            if (this.isChange()) {
                this.setState(CHANGE_STATE);
                if (typeof change === 'function') {
                    change();
                }
            }
            if (this.isReset()) {
                this.setState(INIT_STATE);
                if (typeof change === 'function') {
                    reset();
                }
            }
        }, false)
    }

    isChange() {
        return this.state !== CHANGE_STATE && this.scrollContainer.scrollTop > this.options.criticalPoint
    }

    isReset() {
        return this.state !== INIT_STATE && this.scrollContainer.scrollTop <= this.options.criticalPoint
    }
}

export default Scroll;