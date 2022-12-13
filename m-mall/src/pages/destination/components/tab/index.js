import './tab.css';
import { getData, getDelayedData } from 'api/getData';
import { URL,EL_CLASS,ITEM_ACTIVE_CLASS_NAME } from './config';

// https://www.imooc.com/api/mall-wepApp/destination/content/1

class Tab {
    constructor(el) {
        this.itemEls = el.querySelectorAll(EL_CLASS);
    }

    setAcitveItem(index) {
        for (const itemEl of this.itemEls) {
            itemEl.classList.remove(ITEM_ACTIVE_CLASS_NAME);
        }
        this.itemEls[index].classList.add(ITEM_ACTIVE_CLASS_NAME);
    }

    to(index) {
        // 取消上一次请求
        if (this.dataPromise && this.dataPromise.xhr) {
            const xhr = this.dataPromise.xhr;
            xhr.abort();
        }

        this.setAcitveItem(index);
        this.dataPromise = getData(`${URL}/${this.itemEls[index].dataset.id}`);
        return this.dataPromise
    }
}

export default Tab;